const mysql = require("mysql")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const pool = requre("../sql/connection")
const { handleSQLError } = require("../sql/error")

const saltRounds = 10

const signUp = (req, res) => {
    const { name, email, password } = req.body
    let sql = "INSERT INTO USERS (name, email, password) VALUES (?, ?, ?)"

}

const logInUser = (email, password, res) => {
    let sql = "SELECT * FROM users WHERE email = ?"
    sql = mysql.format(sql, [ email ])
}

const logIn = (req, res) => {
    const { email, password } = req.body
    logInUser(email, password, res)
}

const logOut = (req, res) => {
    res.json({})
}

module.exports = {
    signUp,
    logIn,
    logOut
}