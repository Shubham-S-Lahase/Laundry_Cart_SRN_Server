//dotenv
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const cors = require("cors");

const express = require("express");
const app = express();
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
const profileRoute = require("./routes/profile");
const logoutRoute = require("./routes/logout");

//dbconnection
const db = require("./connection/dbconnection");
db();

//parser
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());





//testing route for  server
app.get("/test", (req, res) => {
  res.json("express server test ~ OK");
});

app.use('/api', registerRoute);
app.use('/api', loginRoute);
app.use('/api', profileRoute);
app.use('/api', logoutRoute);

//express server
app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});
