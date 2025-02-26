const form = document.querySelector("#deleteButton");
 
form.addEventListener("submit", function(e) {
  let answer = confirm("Are you sure you want to delete this item?");
  if(!answer) {
    e.preventDefault();
  }
})