let mongoose = require("mongoose");
let schema = mongoose.Schema;

let productSchema = new schema(
  {
    productName: {
      type: String,
      required: true,
      unique: true,
      enum: ["Pants", "Shirt", "T-Shirt", "ChemicalWash"],
    },
    image: { type: String, required: true },
    operationDetails: [
      {
        operationName: {
          type: String,
          required: true,
          enum: ["Washing", "Ironing", "DryingClean", "ChemicalWash"],
        },
        operationprice: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

let product = mongoose.model("product", productSchema);

module.exports = product;
