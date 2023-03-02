const express = require("express");
const { createOrder, getAllOrders } = require("../controller/order");
const auth = require("../middlewares/auth");

const router = express.Router();

// Create Order POST API
router.post("/create", auth, createOrder);
router.get("/orders", auth, getAllOrders);
//router.put("/orders/:id", auth, updateOrder);

module.exports = router;
