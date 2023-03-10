const mongoose = require("mongoose");
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = "laundry_cart_SN-10X";

const loginController = async (req, res) => {
  const { userId, password } = req.body;
  if (isNaN(userId)) {
    try {
      const userDoc = await User.findOne({ email: userId });
      const passwordOK = bcrypt.compareSync(password, userDoc.password);
      if (passwordOK) {
        //User logged in
        jwt.sign({ userId, id: userDoc._id }, secret, {}, (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json({
            id: userDoc._id,
            userId,
          });
        });
      } else {
        res.status(400).json("Incorrect Credentials");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    try {
      const userDoc = await User.findOne({ mobile: userId });
      const passwordOK = bcrypt.compareSync(password, userDoc.password);
      if (passwordOK) {
        //User logged in
        jwt.sign({ userId, id: userDoc._id }, secret, {}, (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json({
            id: userDoc._id,
            userId,
          });
        });
      } else {
        res.status(400).json("Incorrect Credentials");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

module.exports = { loginController };
