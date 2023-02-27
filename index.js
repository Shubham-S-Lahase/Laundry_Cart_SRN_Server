const express = require("express");
const app = express();
app.use(express.json());

//dotenv
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
dotenv.config();

//mongoose connection
const url = process.env.URL;
const port = process.env.PORT;
mongoose.set('strictQuery', true);
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connected to database");
})
.catch(err => {
    console.log("Error connecting to the database", err);
})

//testing route for  server
app.get('/test', (req,res) => {
    req.json('express server test ~ OK');
})

//express server listening
app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
})