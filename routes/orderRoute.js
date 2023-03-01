const express=require('express');
const { getPastOrder } = require('../controller/orderController');
const auth = require("../middleware/auth")

const router=express.Router();

router.get("/orders",auth , getPastOrder);

module.exports=router;