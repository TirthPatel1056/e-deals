const express = require("express");
const authController = require("../controller/auth-controller");
const router = express.Router();


router.route("/registration").post( authController.registration);
router.route("/login").post(authController.login);
router.route("/profile").post(authController.UserDetails);



module.exports = router;