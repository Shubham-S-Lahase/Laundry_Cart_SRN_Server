let mongoose = require("mongoose");
let schema = mongoose.Schema;
let ObjectId = schema.ObjectId;

let pastOrdersSchema = new schema(
  {
    orderId: { type: String, required: true },
    orderDateTime: { type: Date, required: true },
    storeLocation: { type: String, required: true },
    city: { type: String, required: true },
    storePhoneNumber: { type: Number, required: true },
    totalItems: { type: Number, required: true },
    price: { type: Number, required: true },
    status: { type: Number, required: true },
    user: { type: ObjectId, ref: "user" },
  },
  { timestamps: true }
);

let pastOrders = mongoose.model("pastOrders", pastOrdersSchema);

module.exports = pastOrders;
