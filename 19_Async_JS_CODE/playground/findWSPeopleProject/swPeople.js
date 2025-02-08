const inputField = document.querySelector("#swid")
let swid;

const result = document.createElement('p');
  result.id = "result";
  document.querySelector("#resdiv").append(result);

inputField.addEventListener("input", () => {
  swid = parseInt(inputField.value);
  inputField.style.border = 'none';
  if (swid < 0 || swid >= 60){
    inputField.style.border = "3px solid red";
  }
})

const btn = document.querySelector("#btn")
btn.addEventListener("click", () => {
  if (swid < 0 || swid >= 60){
    result.innerHTML = "Invalid Input. Please provide a number between 1 and 60 (included)"
    inputField.value = 0;
  } else {
    result.innerHTML = "";
    getCharacter(swid);
  }
})

const getCharacter = async function(id) {
  try {
    const req = await fetch(`https://swapi.tech/api/people/${id}`);
    const data = await req.json();
    result.innerHTML = data.result.properties.name;
  } catch (e) {
    console.log("Error: ", e)
  }  
}
