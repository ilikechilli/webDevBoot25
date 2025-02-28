//This document is mostly the same as the firstMongoose.js file
//The problem is that we can't just use the first file in the console all the time or else it will constantly copy the data into the database, which is not what we want

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/moviesOne")
.then(() => {
  console.log("Connection to database is open")
})
.catch((err) => {
  console.log("An error occurred");
  console.log(err);
})

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String
})

const Movie = mongoose.model("Movie", movieSchema);

/* async function getBestMovie() {
  const bestReturn = await Movie.findOne({score: {$gt: 9.6}})
  return bestReturn;
}

let best = getBestMovie();
console.log(best); */

let best;
await Movie.findOne({score: {$gt: 9.6}}).then(r => best = r);

console.log(`the best movie is : \n ${best.title}`);
