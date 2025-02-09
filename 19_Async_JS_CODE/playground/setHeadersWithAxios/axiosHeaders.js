const getDadJoke = async () => {
  const config = {
    headers: {
      Accept: "application/json"
    }
  }
  try {
    const res = await axios.get("https://icanhazdadjoke.com/", config)
    console.log(res.data.joke)
    document.querySelector("#jokeContent").innerHTML = res.data.joke;
  }
  catch(e) {
    console.log("Error: ", e);
  }
}

document.querySelector("#btn").addEventListener("click", getDadJoke);

