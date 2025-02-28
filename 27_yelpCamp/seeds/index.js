const mongoose = require("mongoose");
const Campground = require("../models/campgrounds")
const cities = require("./cities")
const {places, descriptors} = require("./seedHelpers");

// Create connection and test connection -------------------
mongoose.connect("mongodb://localhost:27017/yelp-camp");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", () => {
  console.log("Database connected succesfully")
})

const sample = (array) => {
  return array[Math.floor(Math.random() * array.length)];
}

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++){
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 30 + 10);
    const camp = new Campground({
      title: `${sample(descriptors)} ${sample(places)}`,
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      image: `https://picsum.photos/200?random=${Math.random()}`,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum veniam ab distinctio nam, fuga reprehenderit!",
      price: price
    })
    await camp.save();
  }
  console.log("Seed locations added")
}

seedDB().then(() => {
  mongoose.connection.close();
});