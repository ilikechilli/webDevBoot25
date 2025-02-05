const container = document.querySelector("#container");
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 151; i++){
  const pokemon = document.createElement("div");
  pokemon.classList.add("pokemon");
  const pkmimg = document.createElement("img");
  pkmimg.src = `${baseURL}${i}.png`;
  const tag =  document.createElement("span");
  tag.innerHTML = `#${i}`;
  tag.classList.add("showtag");

  pokemon.addEventListener("mouseenter", () => {
    tag.classList.remove("showtag");
  })

  pokemon.addEventListener("mouseleave", () => {
    tag.classList.add("showtag");
  }
)

  pokemon.appendChild(pkmimg);
  pokemon.appendChild(tag);
  container.appendChild(pokemon);
}
