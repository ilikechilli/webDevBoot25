// old school way of performing an http request is xml http requests



const reqUrl = "https://swapi.dev/api/people/1";
const req = new XMLHttpRequest();

req.onload = function() {
  console.log("It loaded");
  const resptxt = JSON.parse(this.responseText)
  console.log(resptxt.name);
  const myappendage = document.createElement("p");
  myappendage.id = "responseText"
  myappendage.innerHTML = this.responseText;
  document.body.append(myappendage);
}

req.onerror = function() {
  console.log("Errori");
  console.log(this);
}

req.open("GET", reqUrl);
req.send();

const clearbutton = document.querySelector("#clearbutton")
clearbutton.addEventListener("click", () => {
  document.querySelector("p").remove();
})