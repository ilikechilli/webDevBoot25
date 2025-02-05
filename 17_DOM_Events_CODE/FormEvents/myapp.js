const form = document.querySelector("#myform")
const input = document.querySelector("#myinputfield");
const animalList = document.querySelector("#animalList");

form.addEventListener("submit", function(evt){
  evt.preventDefault();
  console.log(form.elements)
  console.log(form.elements.myinputfield.value);
  const newLi = document.createElement("li")
  newLi.innerText = input.value;
  animalList.append(newLi);
  input.value = "";
})