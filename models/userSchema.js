let mongoose = require("mongoose");
let schema = mongoose.Schema;

let userSchema = new schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: Number, required: true, unique: true },
    state: { type: String, required: true },
    district: { type: String, required: true },
    address: { type: String, required: true },
    pincode: { type: Number, required: true },
  },
  { timestamps: true }
);

let user = mongoose.model("user", userSchema);

module.exports = user;
