const mysql = require("mysql")
const pool = require("../sql/connection")
const { handleSQLError } = require("../sql/error")

const getAllPosts = (req, res) => {
    pool.query("SELECT * FROM posts ORDER BY id ASC", (err, rows) => {
        if(err) return handleSQLError(res, err)
        return res.json(rows)
    })
}

const showPost = (req, res) => {
    fetchPostById(req.params.id, res)
}

const fetchPostById = (id, res) => {
    let sql = "SELECT * FROM posts WHERE id = ?"

    sql = mysql.format(sql, [id])

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        res.json(rows[0]);
      })
}

const createPost = (req, res) => {
    const { title, content, user_id } = req.body

    let sql = "INSERT INTO posts (title, content, user_id) VALUES (?,?,?)"

    sql = mysql.format(sql, [title, content, user_id])

    pool.query(sql, (err, result) => {
        console.log("results", result)
        if (err) {
            if(err.code === "ER_DUP_ENTRY") return res.status(409).send("post already exists")
            return handleSQLError(res, err)
        }
    })
}

const deletePostById = (req, res) => {
    let sql = "DELETE FROM posts WHERE id = ?"

    sql = mysql.format(sql, [req.params.id])

    pool.query(sql, (err, results) => {
        if (err) return handleSQLError(res, err)
        res.json({ message: `Deleted ${results.affectedRows} user(s)` });
      })
}

module.exports = {
    getAllPosts,
    showPost,
    createPost,
    deletePostById
}