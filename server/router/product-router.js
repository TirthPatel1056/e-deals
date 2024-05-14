
const express = require("express");
const router = express.Router();
const { home, sigleProDetail } = require("../controller/product-controller");


router.route("/").get(home);

router.route(`/product-details/:_id`).get(sigleProDetail);

module.exports = router;

