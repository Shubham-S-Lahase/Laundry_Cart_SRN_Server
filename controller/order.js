const order = require("../models/orderSchema");

// Create Order controller
const createOrder = async (req, res) => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "/" + mm + "/" + yyyy;

  const modifiedOrder = {
    ...req.body,
    orderDate: formattedToday,
  };

  try {
    const data = await order.create(modifiedOrder);
    if (data) {
      res.status(200).json({
        message: "Success",
        data,
      });
    } else {
      res.status(400).json({
        status: "failed",
        data,
      });
    }
  } catch (e) {
    return res.status(400).json({
      status: "failed",
      message: e.message,
    });
  }
};

//---------------------------------------------------------------
//get past order list for a user
const getAllOrders = async (req, res) => {
  try {
    let data = await order.find({ userId: req.body.userId });
    res.status(200).json({
      status: "Success",
      data,
    });
  } catch (e) {
    res.status(500).json({
      status: "Failed",
      message: e.message,
    });
  }
};

// const updateOrder = async (req, res) => {
//   try {
//     // console.log("Called")
//     let result = await Order.findOneAndUpdate(
//       { _id: req.params.id },
//       { $set: { status: "Cancelled" } }
//     );
//     // console.log(result)
//   } catch (e) {
//     res.status(500).json({
//       status: "Failed",
//       message: e.message,
//     });
//   }
// };

//---------------------------------------------
//sends img file to postviewpage through img tag
const path = require("path");
const operationIcons = async (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, "..", "images", req.params.filename));
};

module.exports = { createOrder, getAllOrders, operationIcons };
