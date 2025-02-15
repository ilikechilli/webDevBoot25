const express = require("express");
const app = express();
const port = process.argv[2] || 3000;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use((req, res, next) => {
  console.log("Request made");
  console.log(req.headers);
  next();
})

app.get("/", (req, res) => {
  res.render("index")
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
})