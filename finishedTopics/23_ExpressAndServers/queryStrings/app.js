const express = require("express");
const app = express();
const port = process.argv[2] || 3000;

app.use((req, res, next) => {
  console.log(req.url);
  next();
})

//querystrings are the portion of the urls that come after the questionmark and after the URL parameters
//Querystrings are not added to the path, instead the request object has a property called query that contains key-value pairs based on the query
app.get("/query", (req, res) => {
  console.log(req.query)
  res.send("Welcome to the homepage!!!")
})

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
})