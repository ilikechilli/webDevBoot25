const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/shopApp")
.then(() => {
  console.log("Connection to database is open")
})
.catch((err) => {
  console.log("An error occurred");
  console.log(err);
})

//We've already seen the short way of creating a schema but there is also a long way
// The long way allows for additional properties to be set such as "required" which will determine if a document entry required a certain field or not.

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 20,
      lowercase: true
    },
    price: {
      type: Number,
      min: 0,
      max: 99999,
      required: true
    },
    onSale: {
      type: Boolean,
      default: false
    },
    categories: {
      type: [String],
      default: ['something default']
    },
    qty: {
      online: {
        type: Number,
        default: 0
      },
      inStore: {
        type: Number,
        defautl: 0
      }
    },
    size: {
      type: String,
      enum: ["S", "M", "L"]
    }
  }
)

//Schemas are constrained. 

const Product = mongoose.model("Product", productSchema);

const bike = new Product({name: "City Bike", price: 699, categories: ["City bike", "bike", "two wheels"], qty: {online: 3, inStore: 2}})
bike.save()
.then(data => {
  console.log('bike added');
  console.log(data)
})
.catch(err => {
  console.log("something went wrong")
  console.log(err);
})

const addBasicProduct = function(name, price){
  const newPro = new Product({
    name: name, price: price
  })
  newPro.save();
}





