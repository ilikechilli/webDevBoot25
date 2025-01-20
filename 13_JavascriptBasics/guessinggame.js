let maximum = parseInt(prompt("Enter the maximum number!: "));

while(!maximum) {
  maximum = parseInt(prompt("Not a valid number, please enter a valid number: "));
}

const targetNumber = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt(`Now guess the number I came up with that is between 0 and your ${maximum}: `));
let attempts = 0
while(guess !== targetNumber){
  attempts++;
  if (guess > targetNumber){
    guess = parseInt(prompt("Too high! Enter a new guess: "))
  } else {
    guess = parseInt(prompt("Too low: Guess another number: "))
  }
}
alert(`You got it, the number was ${targetNumber} and it took you ${attempts} guesses to guess the right number!`)