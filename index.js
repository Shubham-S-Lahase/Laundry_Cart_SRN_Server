//dotenv
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;

const express = require("express");
const app = express();
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");

//dbconnection
const db = require("./connection/dbconnection");
db();

//parser
app.use(express.json());





//testing route for  server
app.get("/test", (req, res) => {
  res.json("express server test ~ OK");
});

app.use('/api', registerRoute);
app.use('/api', loginRoute);

//express server
app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});
