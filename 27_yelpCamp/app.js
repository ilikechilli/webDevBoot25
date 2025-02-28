const express = require("express");
const port = process.argv[2] || 3000;
const path = require("path");
const mongoose = require("mongoose");
const Campground = require("./models/campgrounds")
const override = require("method-override");
const ejsMate = require("ejs-mate");


// Create connection and test connection -------------------
mongoose.connect("mongodb://localhost:27017/yelp-camp");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", () => {
  console.log("Database connected succesfully")
})
//-------------------------------------
const app = express();

app.engine("ejs", ejsMate)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));
app.use(override("_method"))

app.get("/", (req, res) => {
  res.render("home");
})

app.get("/campgrounds", async(req, res) => {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/index", {
    campgrounds
  })
})

app.get("/campgrounds/new", (req, res) => {
  res.render("campgrounds/new")
})

app.post("/campgrounds", async (req, res) => {
  const data = req.body.campground;
  const newCamp = new Campground(
    data
  );
  await newCamp.save();
  res.redirect(`/campgrounds/${newCamp.id}`)
})

app.get("/campgrounds/:id", async (req, res) => {
  const id = req.params.id;
  const campground = await Campground.findById(id);
  res.render("campgrounds/show", {campground});
})

app.get("/campgrounds/:id/edit", async (req, res) => {
  const id = req.params.id
  const campground = await Campground.findById(id);
  res.render("campgrounds/edit", {campground})
})

app.put("/campgrounds/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body.campground;
  const updatedCamp = await Campground.findByIdAndUpdate(id, data, {new: true, runValidators: true});
  res.render("campgrounds/show", {campground: updatedCamp})
})

app.delete("/campgrounds/:id", async (req, res) => {
  const id = req.params.id;
  const campground = await Campground.findByIdAndDelete(id);
  console.log(`Deleted the campground: "${campground.title}"`)
  res.redirect("/campgrounds")
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})