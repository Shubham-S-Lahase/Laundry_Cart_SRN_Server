const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { route } = require("./login");
const secret = "laundry_cart_SN-10X";

const router = express.Router();
router.use(express.json());
router.use(cookieParser());

router.get('/profile', (req,res) => {
    const {token} = req.cookies;
    // console.log(token);
    jwt.verify(token, secret, {}, (err, info) => {
        if(err) throw err;
        res.json(info);
    })
})

module.exports = router;