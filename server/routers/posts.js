const express = require("express")
const router = express.Router()
const postsController = require("../controllers/posts")

router.get("/", postsController.getAllPosts)

router.get("/:id", postsController.showPost)

router.post("/", postsController.createPost)

router.delete("/:id", postsController.deletePostById)

module.exports = router