const mysql = require("mysql")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const pool = requre("../sql/connection")
const { handleSQLError } = require("../sql/error")

const saltRounds = 10

const signUp = (req, res) => {
    const { name, email, password } = req.body
    let sql = "INSERT INTO USERS (name, email, password) VALUES (?, ?, ?)"

    bcrypt.hash(password, saltRounds, function(err, hash) {
        sql = mysql.format(sql, [name, email, hash])

        pool.query(sql, (err, result) => {
            console.log("result", result)
            if (err) {
                if (err.code === "ER_DUP_ENTRY") return res.status(409).send("email is already registered")
                return handleSQLError(res, err)
            }
            return logInUser(email, password, res)
        })
    })

}

const logInUser = (email, password, res) => {
    let sql = "SELECT * FROM users WHERE email = ?"
    sql = mysql.format(sql, [ email ])

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        if (!rows.length) return res.status(404).send("No matching users")

        const hash = rows[0].password
        bcrypt.compare(password, hash)
            .then(result => {
                if (!result) return res.status(400).send("Invalid password")

                const data = { ...rows[0]}
                data.password = "REDACTED"

                const token = jwt.sign(data, process.env.JWT_SECRIET)
                res.json({
                    msg: "Log in successful",
                    token,
                    user: data
                })
            })
    })
}

const logIn = (req, res) => {
    const { email, password } = req.body
    logInUser(email, password, res)
}

const logOut = (req, res) => {
    res.json({})
}

const checkUser = (req, res) => {
    res.send(req.user)
}

module.exports = {
    signUp,
    logIn,
    logOut,
    checkUser
}