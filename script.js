import { pokemonList } from "./pokemonData.js";

//  How to access individual fields of object
//const sigrid = {
//    name: "Sigrid",
//    age: 28,
//}

//console.log(sigrid)
//console.log(sigrid.name)
//console.log(sigrid.age)

//console.log(pokemonList.results)

for (const pokemon of pokemonList.results) {
  //Lage et html element
  const newElement = createPokemonCard(pokemon);

  //Sett inn i dokument
  const list = document.getElementById("pokemon-list");
  list.appendChild(newElement);
}

function createPokemonCard(name) {
  const pokemonCard = document.createElement("li");
  pokemonCard.textContent = pokemon.name;
  pokemonCard.className = "pokemon-card";

  return pokemonCard;
}
