// The setTimeout and setInterval methods are not array methods but they so take a callback function to operate. Which is why it is usefull to cover these here.

const id = setInterval(() => {
  console.log(Math.random())
}, 3000);


console.log(id);