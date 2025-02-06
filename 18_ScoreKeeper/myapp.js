// set elemenent variables
const p1btn = document.querySelector("#p1btn");
const p2btn = document.querySelector("#p2btn");
const reset = document.querySelector("#resetbtn");
const setting = document.querySelector("#setting");
const p1s = document.querySelector("#p1s");
const p2s = document.querySelector("#p2s");

//Set logic keeper variables
let p1score = 0;
let p2score = 0;
let playToScore = parseInt(setting.value);

//Add the event listeners
setting.addEventListener("change", (evt) => {
  playToScore = parseInt(setting.value);
  p1score = 0;
  p2score = 0;
  updateScoreBoard();
}
)
p1btn.addEventListener("click", (evt) => {
  if (p1score < playToScore && p2score < playToScore){
    p1score++;
    updateScoreBoard();
  }
})

p2btn.addEventListener("click", (evt) => {
  if (p2score < playToScore && p1score < playToScore){
    p2score++;
    updateScoreBoard();
  }
})

reset.addEventListener("click", () => {
  p1score = 0; p2score = 0;
  updateScoreBoard();
})

function updateScoreBoard(){
  p1s.innerText = p1score;
  p2s.innerText = p2score;
  if (p1score > p2score && p1score === playToScore){
    p1s.style.color = "green";
    p2s.style.color = "red";
  } else if (p2score > p1score && p2score === playToScore){
    p2s.style.color = "green";
    p1s.style.color = "red";
  } else {
    p1s.style.color = "black";
    p2s.style.color = "black";
  }
}