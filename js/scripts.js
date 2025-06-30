//IIFE to wrap pokemonList
let pokemonRepository = (function() {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  
    function add(pokemon) {
    if (typeof pokemon === 'object' && 'name' in pokemon && 'detailsUrl' in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.error('Invalid Pokémon object:', pokemon);
    }
  }

  function getAll() {
    return pokemonList;
  }
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
            // Create list item and button
        let listItem = document.createElement('li');
        let button = document.createElement('button');
            button.innerText = pokemon.name;
            button.classList.add('pokemon-button');
            // Add event listener
            button.addEventListener('click', function () {
            showDetails(pokemon);
        });
            // Append button to listItem, then listItem to UL
            listItem.appendChild(button);
            pokemonList.appendChild(listItem);
        }
    function showDetails(pokemon) {
      loadDetails(pokemon).then(function (){
        console.log(pokemon);
        });
    } 
        
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  } 
  
  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(pokemon.detailsUrl).then(function (response) {
        return response.json();
      }).then(function (details) {
        pokemon.imageUrl = details.sprites.front_default;
        pokemon.height = details.height;
        pokemon.types = details.types.map(type => type.type.name);
      })
      .catch(function (e) {
        console.error(e);
      });
  }

    return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});