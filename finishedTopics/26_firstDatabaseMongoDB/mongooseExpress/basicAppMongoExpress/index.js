const express = require("express");
const app = express();
const path = require("path");
const override = require("method-override");

//Setup Mongoose

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/farmStand")
.then(() => {
  console.log("Connection to Mongo database is open!");
})
.catch((err) => {
  console.log("Something went wrong:");
  console.log(err);
})

//Import the model
const Product = require("./models/product");
const { Console } = require("console");

app.set('views', path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use("/static", express.static(path.join(__dirname, "public")))

app.use(express.urlencoded());
app.use(express.json());
app.use(override("_method"));

const categories = ["fruit", "vegetable", "dairy"]

app.get("/products", async (req, res) => {
  const category = req.query.category;
  if (category) {
    const products = await Product.find({category: category});
    res.render("products/index", {products, category})
  } else {
    const products = await Product.find({});
    console.log(products);
    res.render("products/index", {
      products, category: "All"
    })
  }
})

app.get("/products/new", (req, res) => {
  res.render("products/new", {categories})
})

app.post("/products", async(req, res) => {
  const inp = req.body;
  const newProduct = new Product({name: inp.name, price: inp.price, category: inp.category});
  try {
    await newProduct.save();
    console.log(`New product (${inp.name}) sucesfully added to database`)
    res.redirect(`/products/${newProduct.id}`)
  } catch (err) {
    console.log("Something went wrong")
    console.log(err);
    res.send("Something went wrong, the product was not saved to the database");
  }
  
})

app.get("/products/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    res.render("products/show", {product});
    console.log(product.name);
  } catch(err){
    console.log("An error occurred:")
    console.log(err);
    res.render("products/notFound", {id})
  }
})

app.get("/products/:id/edit", async(req, res) => {
  const id = req.params.id
  const details = await Product.findById(id)
  res.render("products/edit", {details, categories});
})

app.put("/products/:id", async(req, res) => {
  const id = req.params.id;
  const inp = req.body;
  const product = await Product.findByIdAndUpdate(id, {name: inp.name, price: inp.price, category: inp.category}, {new: true, runValidators: true});
  res.redirect(`/products/${product.id}`);
})

app.delete("/products/:id", async (req, res) => {
  const id = req.params.id
  const deleted = await Product.findByIdAndDelete(id);
  res.redirect("/products");
})

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`)
})