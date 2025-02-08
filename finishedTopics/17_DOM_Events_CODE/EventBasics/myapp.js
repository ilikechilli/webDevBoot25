//The commented out code below is replaced by inline html onlickc code
/* let myFirstButton = document.querySelector("#firstButton");

myFirstButton.addEventListener("mousedown", () => {
  alert("Hello!");
  alert("Stop Clicking");
}) */


const mySecondButton = document.querySelector("#secondButton");

mySecondButton.onclick = () => {
  console.log("you clicked me!")
  console.log("I hope this worked")
}

//Note that whan passing a predefined function to an even, it should be passed and not called which means we don't need parentheses.
mySecondButton.onmouseenter = scream;

function scream(){
  console.log("AAAAAAHHHHHHHHHHHH");
  console.log("Stop touching me!")
}

//the best option to work with events is addEventListener

const myThirdButton = document.querySelector("#thirdButton");

myThirdButton.addEventListener("click", () => {
  console.log("Clicked");
})
myThirdButton.addEventListener("dblclick", () => {
  console.log("I was double clicked!");
})