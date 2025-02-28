const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/moviesOne") // Creates a movies database in mongo if not exists, otherwise it connects to it.
.then(() => {
  console.log("Connection to database is open")
})
.catch((err) => {
  console.log("An error occurred");
  console.log(err);
})

// Mongoose works with models which are javascript classes that represent information on a database

// First we need to define a schema: This is a schametic blueprint that maps different collection keys from mongo to different types in javascript.
// We are taking data from mongo that has different types than javascript
// It defines what a given item should look like
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String
})

// The schema has nothing to do with the database itself, it is a concept on the javascript side
// We can make a model using the schema
// The model is not yet the database but it allows us to make new instances of movies for the database which can be saved to the database!

const Movie = mongoose.model("Movie", movieSchema);

const amadeus = new Movie({title: "Amadeus", year: 1986, score: 9.2, rating: "R"});

// The line above created a new instance of movie for amadeus but still does not include it in the database. 
// You can run this file from the Node REPL to access the constant by using node --> .load firstMongoose.js
// To save the instance of the movie we can call the .save() method which is a built in Mongoose method for .model objects!

amadeus.save(); // The document will now be saved to the database!

//Let's update the score for amadeus...
//But this is an issue because the .save() method takes time to run which means that the two lines below will cause issues!
//amadeus.score = 9.5;
//amadeus.save();
//So for we will use a setTimeout for the code below. This is not the best practice but will have to do for now
// It is not always usefull to have to save a new instance of a movie to a variable first if this happens outside a function!
// We can use another method with the Movie model called .insertMany(). The problem is that if we use this script multiple times, it is going to repeat. insertMany() also takes time which means we need to use promises! The method does not require a call to .save()...


setTimeout(() => {
  amadeus.score = 9.5;
  amadeus.save()
  .then(
    Movie.insertMany(
      [
        {title: "Amelie", year: 2001, score: 8.3, rating: "R"},
        {title: "Alien", year: 1979, score: 8.1, rating: "R"},
        {title: "The Iron Giant", year: 1999, score: 7.5, rating: "PG"},
        {title: "Stand By Me", year: 1986, score: 8.6, rating: "R"},
        {title: "Moonrise Kingdom", year: 2012, score: 7.3, rating:"PG-13"}
      ]
    ).then(data => {
      console.log("It worked");
      console.log(data);
    })
    .catch(err => {
      console.log("An error occurred")
      console.log(err);
    })
  )
}, 1000);







