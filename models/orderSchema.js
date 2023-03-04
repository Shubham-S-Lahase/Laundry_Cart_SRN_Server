let mongoose = require("mongoose");
let schema = mongoose.Schema;
let ObjectId = schema.ObjectId;

let orderSchema = new schema(
  {
    userId: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    orderDate: {
      type: String,
      default: Date.now(),
    },

    storeLocation: {
      type: String,
      default: "ChandiniChowk",
    },
    storeAddress: {
      type: String,
      default: "near Apple Store ",
    },
    storeCity: {
      type: String,
      default: "New Delhi",
    },
    storePhone: {
      type: String,
      default: "+91 9876543210",
    },
    orderStatus: {
      type: String,
      default: "Order Placed",
    },
    TotalOrderPrice: {
      type: Number,
      required: true,
    },
    TotalItems: {
      type: Number,
      required: true,
    },
    orderItems: [
      {
        productType: {
          type: String,
          required: true,
        },
        operationType: {
          type: Array,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        productCost: {
          type: Number,
          required: true,
        },
        totalProductPrice: {
          type: Number,
          required: true,
        },
      },
    ],
    shippingAddress: {
      type: String,
      required: true,
      default: "Banglore",
    },

    pincode: {
      type: Number,
      required: true,
      default: "533255",
    },
  },
  { timestamps: true }
);

let order = mongoose.model("order", orderSchema);

module.exports = order;
