const express = require("express");
const app = express();

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//dotenv
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;

//dbconnection
const db = require("./connection/dbconnection");
db();

//testing route for  server
app.get("/test", (req, res) => {
  res.json("express server test ~ OK");
});

//express server
app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});
