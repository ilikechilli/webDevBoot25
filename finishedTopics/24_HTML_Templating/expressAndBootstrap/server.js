const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.set("public", path.join(__dirname, "/public"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})