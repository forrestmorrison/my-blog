const express = require("express")
const authController = require("../controllers/auth")
const { authenticate } = require("../middleware/index")
const router = express.Router()

router.post("/signUp", authController.signUp)
router.post("/logIn", authController.logIn)
router.post("/logOut", authController.logOut)

router.get("/checkUser", authenticate, authController.checkUser)

module.exports = router