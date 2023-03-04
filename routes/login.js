const express = require("express");

const cookieParser = require("cookie-parser");
const { loginController } = require("../controller/login.js");

const router = express.Router();
router.use(express.json());
router.use(cookieParser());

router.post("/login", loginController);

module.exports = router;
