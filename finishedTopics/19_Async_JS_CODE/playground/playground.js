// basic promise that will be resolved
new Promise((resolve, reject) => {
  resolve()
})

// basic promise that will be rejected
new Promise((resolve, reject) => {
  reject();
})

// create a fakeRequest
// make sure to "return" the new promise
const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const mytimeout = Math.floor(Math.random() * 5000)
    if(mytimeout < 3500){
      setTimeout(() => {
        resolve();
        console.log(mytimeout)
      }, mytimeout)
    } else {
      setTimeout(() => {
        reject();
        console.log(mytimeout)
      }, mytimeout)
    }
  })
}

fakeRequest("something.com")
.then(()=>{
  console.log("Here is your data");
}).catch(() => {
  console.log("Your request timed out");
})

//Create another promise that changes the color of the body of the page after a set delay.
//The promise will only be resolved so even though a rejection parameter is defined below, it will never fail.

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      document.body.style.backgroundColor = color;
      console.log(color);
      //Make sure to add the resolve
      resolve();
    },delay)
  })
}

//Call the promise with explicit returns
//Allways use return because otherwise the next call will not run.
delayedColorChange("red", 1000)
.then(() => {return delayedColorChange("orange", 1000)})
.then(() => {return delayedColorChange("yellow", 1000)})
.then(() => {return delayedColorChange("green", 1000)})
.then(() => {return delayedColorChange("blue", 1000)})
.then(() => {return delayedColorChange("indigo", 1000)})
.then(() => {return delayedColorChange("violet", 1000)})

//Or use implicit return

delayedColorChange("red", 1000)
.then(() => delayedColorChange("orange", 1000))
.then(() => delayedColorChange("yellow", 1000))
.then(() => delayedColorChange("green", 1000))
.then(() => delayedColorChange("blue", 1000))
.then(() => delayedColorChange("indigo", 1000))
.then(() => delayedColorChange("violet", 1000))
.catch(() => console.log("Something is wrong"))

//Both blocks of code above will start at the same time so you will not see it cycling through the colors twice, rather, it will cycle through to colors twice but at the same time giving the appearance of cycling just once.

