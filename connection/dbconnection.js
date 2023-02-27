//mongoose connection
const { default: mongoose } = require("mongoose");
const url = process.env.URL;


async function connection() {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log("Error connecting to the database", err);
    });
}

module.exports = connection;