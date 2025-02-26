const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

//Setting up a middleware where static files will be served
app.use(express.static("public"));

//Set the view engine and make sure the views and public folders are accessible when the server is run from outside the project folder.
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.set("public", path.join(__dirname, "/public"))

app.get("/", (req, res) => {
  res.render('index');
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})