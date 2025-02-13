  const express = require("express");
  const port = 3000;
  const app = express();

  //app.use() will run every time a request is made

  app.use((req, res) => {
    console.log("request made");
  })

  app.get("/", (req, res) => {
    res.send("Hello world!");
  })

  app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
  })