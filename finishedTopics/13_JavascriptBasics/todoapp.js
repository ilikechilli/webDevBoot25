let active = true;
tasks = [];
while(active){
  let task = prompt("What would you like to do? " ).toLowerCase();
  if(task == "quit"){
    console.log("Goodbye");
    active = false;
  } else if (task == "new") {
    tasks.push(prompt("Enter your new To-Do: "))
    console.log("**********")
    for(let i = 0; i < tasks.length; i++){
      console.log(`${i}: ${tasks[i]}`);
    }
    console.log("**********")
  } else if (task == "delete"){
    let deletionIndex = parseInt(prompt("Enter the index of the task you wish to delete"));
    tasks.splice(deletionIndex, 1);
    console.log("**********");
    for(let i = 0; i < tasks.length; i++){
      console.log(`${i}: ${tasks[i]}`);
    } 
    console.log("**********");
  } else if (task == "list") {
    console.log("**********");
    for(let i = 0; i < tasks.length; i++){
      console.log(`${i}: ${tasks[i]}`);
    } 
    console.log("**********");
  }
}