const express = require("express");
const router = express.Router();
const authcontroller = require("../controller/democontroller.js");

router.route("/").get(authcontroller.home);

router.route("/register").post(authcontroller.registration);
module.exports = router;
