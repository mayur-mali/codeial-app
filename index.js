const express = require("express");
const app = express();
const port = 8000;

//use express router
app.use("/", require("./routes"));

app.set("view engine", "ejs");
app.set("views", "./viwes");

app.listen(port, function (err) {
  if (err) {
    console.log(`error in running the server: ${err}`);
  }
  console.log(`Server is listening on ${port}`);
});
