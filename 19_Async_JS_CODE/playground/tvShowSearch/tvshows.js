const form = document.querySelector("#searchForm");

form.addEventListener("submit", async function(e){
  e.preventDefault();
  //console.dir(form);
  //console.log(form.elements.query.value)
  clearImages();
  const searchTerm = form.elements.query.value;
  const config = {
    params:{
      q: searchTerm
    },
    headers: {}
  }
  const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
  console.log(res.data[0].show.image.medium);
  makeImages(res.data)
  form.elements.query.value = '';
})

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image){
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.querySelector("#resultImages").append(img);
    }
  }
}

const clearImages = () => {
  document.body.querySelector("#resultImages").innerHTML = "";
}