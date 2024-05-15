// Acquire the information
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

const queryParameters = window.location.search;
const pokemonName = queryParameters.split('=')[1];
const url = baseUrl + pokemonName;

// How to send messages across the network
const response = await fetch(url);
const data = response.json();

// Make use of the data
console.log(data);
const nameElement = document.createElement('h1');
nameElement.textContent = data.name;

document.body.appendChild(nameElement);
