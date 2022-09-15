// require library
const mongoose = require("mongoose");

// connect to a database connection
mongoose.connect("mongodb://localhost/codial_db");

// acquire a connection
const db = mongoose.connection;

// check if the error in connection
db.on("error", console.error.bind(console, "error in connecting to database"));

//if  connection succefully established
db.once("open", function () {
  console.log("succefully connected to database");
});
