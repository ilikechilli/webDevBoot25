const mybutton = document.querySelector("#mybutton");
mybutton.addEventListener("click", getRandomColor);

function getRandomColor(){
  const r = getColorNumber();
  const g = getColorNumber();
  const b = getColorNumber();
  const colorString = `rgb(${r}, ${g}, ${b})`
  const textcolor = `rgb(${255 - r}, ${255 - g}, ${255 - b})`

  document.querySelector("h1").innerHTML = colorString;
  document.querySelector("h1").style.color = textcolor;
  document.querySelector("body").style.backgroundColor = colorString;
}

function getColorNumber(){
  return Math.floor(Math.random() * 255);
}