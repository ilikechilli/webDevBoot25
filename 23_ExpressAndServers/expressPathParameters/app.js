const express = require('express');
const app = express();
const port = process.argv[2] || 3000;

app.use((req, res, next) => {
  console.log("Request made");
  next();
})

app.get("/", (req, res) => {
  console.log("Homepage requested");
  res.send("<h1>Express Path Parameters</h1>")
})

//We can use Path Parameters that are more general by preceding them with a colon. URL parameters can be accessed by using the req.params method
app.get("/sub/:primary/:secondary", (req, res) => {
  console.log(req.params);
  res.send(`<h1>Section ${req.params.primary} subsection ${req.params.secondary} </h1>`);
})

app.listen(port, () => {
  console.log(`Server running and listening on port: ${port}`);
})