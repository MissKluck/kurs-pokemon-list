// Acquire the information
const baseUrl = "https://pokeapi.co/api/v2/pokemon/"
const queryParameters = window.location.search
const pokemonName = queryParameters.split("=") [1]
const url = baseUrl + pokemonName


// How to send messages across the network
const response = await fetch(url)
const data = response.json()

console.log(response)

// Make use of the data
const nameElement = document.createElement("hi")
nameElement.textContent = data.name

document.body.appendChild(nameElement)