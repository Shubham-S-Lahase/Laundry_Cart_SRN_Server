const express = require("express");
const app = express();
const cors = require("cors");

//parser
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

//dotenv
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;

//dbconnection
const db = require("./connection/dbconnection");
db();

const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
const profileRoute = require("./routes/profile");
const logoutRoute = require("./routes/logout");
const orderRoute = require("./routes/order");

app.use("/api", registerRoute);
app.use("/api", loginRoute);
app.use("/api", profileRoute);
app.use("/api", logoutRoute);
app.use("/order", orderRoute);

const product = require("./models/ProductSchema");
app.get("/productList", async (req, res) => {
  try {
    let result = await product.find();
    res.status(201).json({ status: "sucess", result });
  } catch (e) {
    res.status(400).json({ status: "failed", message: e.message });
  }
});
//-----------------------------------------
//setting products in database
// const product = require("./models/ProductSchema");

// app.get("/product", async (req, res) => {
//   // console.log(data);
//   const data = require("./data.json");
//   try {
//     let result = await product.create(data);
//     if (result) res.status(201).json({ status: "sucess", result });
//     else res.status(400).json({ status: "failed", result });
//   } catch (e) {
//     res.status(400).json({ status: "failed", message: e.message });
//   }
// });
//-----------------------------------------------

//testing route for  server
app.get("/test", (req, res) => {
  res.json("express server test ~ OK");
});

//express server
app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});
