//The map-method

// Create an array
const myArr = [...Array(11).keys()]
myArr.shift();

//Map is similar to forEach except that it return a new array

const doubledArray = myArr.map(function(num){
  return num * 2
})

console.log(`The original array is : "${myArr}"`)
console.log(`The doubled array is: "${doubledArray}"`);

// Create a new array with several objects
const myPets = [
  {
    name: "Loki",
    age: 13,
    species: "Dog",
    breed: "garbage",
    isCute: true
  },
  {
    name: "Tootsie",
    age: 4,
    species: "Dog",
    breed: "poodle-bouvier",
    isCute: true
  },
  {
    name: "Berlioz",
    age: 5,
    species: "Cat",
    breed: "garbage",
    isCute: true
  }
]

// iterate over myPets and extract the species and age into a new array

const anonymousPets = myPets.map(
  function(el) {
    const returnObj = {
      species: el.species,
      age: el.age
    }
    return returnObj;
  }
)

console.log(anonymousPets);