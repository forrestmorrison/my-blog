const express = require("express")
const authController = require("../controllers/auth")
const router = express.Router()

router.post("/signUp", authController.signUp)
router.post("/logIn", authController.logIn)
router.post("/logOut", authController.logOut)

module.exports = router