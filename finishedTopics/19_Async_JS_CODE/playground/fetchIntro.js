//intro to using fetch instead of HTTPRequest
// Axios uses fetch behind the scenes so it is usefull to know how fetch works
// The workings of fetch are demonstrated here

// save the used API call in a variable
const myUrl = "https://swapi.tech/api/people/1";

//Use Fetch with the api call
//fetch is promise based and would be usefull to store in a variable
const myFirstFetch = fetch(myUrl);
myFirstFetch
.then((res) => {
  console.log("Success", res);
  return res.json();
})
.then((data) => {
  console.log(data.result.description)
  console.log(data.result.properties.name)
  //To follow up with a new request, I can return another fetch
  return fetch(myUrl.substring(0, myUrl.length - 1) + "2");
})
.then((res) => {
  console.log('Success again!', res)
  return res.json();
})
.then((data) => {
  console.log(data.result.description)
  console.log(data.result.properties.name)
})
.catch((e) => {
  console.log("error", e);
})

// the above code can be refcactored and simplyfied using async functions

const loadStarWarsPeople = async function(){
  try{
    const res1 = await fetch(myUrl);
    const data = await res1.json();
    console.log(data.result.description);
    console.log(data.result.properties.name);
    const res2 = await fetch(myUrl.substring(0, myUrl.length - 1) + "2");
    const data2 = await res2.json();
    console.log(data2.result.description);
    console.log(data2.result.properties.name);
  } catch (e) {
    console.log("error", e)
  }
}

