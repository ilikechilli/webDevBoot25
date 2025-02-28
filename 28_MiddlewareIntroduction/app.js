const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const morgan = require("morgan");

let accessLogStream = fs.createWriteStream(path.join(__dirname, "/log/access.log"), {flags: "a"});

app.use(morgan("combined", {stream: accessLogStream}));

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
})

//Middleware can be used with paths to match! So middleware does not always need to be run
app.use("/dog", (req, res, next) => {
  console.log("I love Dogs!");
  next();
})
//Some middleware can be used for certain request methods alone!
app.use((req, res, next) => {
  if (req.method == "GET"){
    console.log("GET Method Used");
    // Do something with GET methods alone.
  }
  next();
})

//The utterly useless code blow protects specific routs
app.use("/somethingSecret", (req, res, next) => {
  const password = req.query.password;
  if (password === 'chickennugget') {
    next();
  } else {
    res.send("Sorry you need a password!")
  }
})

//But the code above is not the best way of doing this.
//Express mothods actually accept multiple callback functions instead of just the one that we always pass in.
const verifyPwd = function(req, res, next) {
  const pwd = req.query.password;
  if (pwd === "woodstove"){
    next();
  } else {
    res.send("Sorry, you need the correct password!");
  }
}


app.get("/", (req, res) => {
  res.send("Home page");
})
app.get("/dog", (req, res) => {
  res.send("Woof Woof!")
})

app.get("/secret", verifyPwd, (req, res) => {
  res.send("Sometimes I wear headphones in public so I don't have to talk to anyone")
})

app.use((req, res) => {
  res.status(404).send("Page not found!")
})

app.listen(3000, () => {
  console.log(`Middleware intro server is listening on port: 3000`);
})

