const express = require("express");
const app = express();
const port = 3000;

app.use((req, res) => {
  console.log("request made");
  console.log(req.headers)
})

app.get("/", (req, res) => {
  res.send("hello!")
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})