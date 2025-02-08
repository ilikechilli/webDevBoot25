
async function myfunc() {
  await setTimeout(() => {
    console.log("My Message");
    return null;
  }, 2000);
  await(setTimeout(() => {
    console.log("another message")
    return null;
  }, 2000))
}