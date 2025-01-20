function multiply(num1, num2){
  if (typeof num1 !== "number" || typeof num2 !== "number"){
    return NaN;
  } else {
    return num1 * num2;
  }
}

console.log(multiply(4, 6));

function isShortsWeather(temp){
  if (temp >= 75) {
    return true;
  } else {return false}
}

console.log(isShortsWeather(65));

function lastElement(arr) {
  if (arr.length < 1){
    return null;
  } else {
    return arr[arr.length - 1];
  }
}

console.log(lastElement(["This", "is", "a", "test"]))
console.log(lastElement([]));

function capitalize(str) {
  return (str[0].toUpperCase() + str.slice(1))
}

console.log(capitalize("something"));

function sumArray(arr){
  let mySum = 0;
  for (let num of arr){
      mySum += num
  }
  return mySum;
}
console.log(sumArray([5, 7 , 54]))

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function returnDay(daynum){
    if (daynum < 1 || daynum > 7){
        return null
    } else {
        return daysOfWeek[daynum - 1]
    }
}

console.log(returnDay(4));
