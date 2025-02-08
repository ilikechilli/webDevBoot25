// axios.get("https://swapi.tech/api/people/10")
// .then((res) => {
//   console.log(res.data.result);
// })
// .catch((e => {
//   console.log('Error: ', e)
// }))

const getStarWarsPerson = async function(id){
  try {
    const res = await axios.get("https://swapi.tech/api/people/"+id)
    console.log(res);
    return res;
  } catch(e){
    console.log('error: ', e);
  }
}

getStarWarsPerson(5).then((res) => {
  console.log(res.data.result.properties.name)
});