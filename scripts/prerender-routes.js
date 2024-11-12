(async () => {

  const fs = require('fs');

  const TOTAL_POKEMONS = 10;
  const TOTAL_PAGES = 5;

  // const pokemonsIds = Array.from(Array(11).keys());
  const pokemonsIds = Array.from({ length: TOTAL_POKEMONS }, (_, i) => i + 1);
  const pokemonsPages = Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1);

  let fileContent = pokemonsIds.map(
    id => `/pokemons/${id}`
  ).join('\n');

  let fileContentPages = pokemonsPages.map(
    page => `/pokemons/pages/${page}`
  ).join('\n');


  const pokemonNameList = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}`)
    .then(resp => resp.json())

  const pokemonsList = pokemonNameList.results.map(
    pokemon => `/pokemons/${pokemon.name}`
  ).join('\n');

  const content = (
    fileContent
    +'\n'+
    fileContentPages
    +'\n'+
    pokemonsList
  );
  fs.writeFileSync('routes.txt', content);
})(); //
