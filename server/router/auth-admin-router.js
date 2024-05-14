const express = require("express");
const { alluserOnAdmin } = require("../controller/auth-admin");

const router = express.Router();

router.route("/admin").get(alluserOnAdmin);


module.exports = router;