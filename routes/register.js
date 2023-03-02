const express = require("express");
const mongoose = require("mongoose");
const  User = require("../models/User");
const bcrypt = require("bcryptjs");

const salt = bcrypt.genSaltSync(10);

const router = express.Router();

router.post('/register', async (req,res) => {
    const {name, email, password, mobile, state, district, address, pincode} = req.body;
    try{
        const userDoc = await User.create({
            name,
            email,
            mobile,
            state,
            district,
            address,
            pincode,
            password:bcrypt.hashSync(password, salt)  
        });
        res.json(userDoc);
    } catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
})

module.exports = router;
