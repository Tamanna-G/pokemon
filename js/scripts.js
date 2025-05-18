//IIFE to wrap pokemonList
let pokemonRepository = (function() {
    let pokemonList = [
            {name: 'Bulbasaur',
            hp: 45,
            attack: 49,
            defense: 49,
            speed: 45,
            spAttack: 65,
            spDefense: 65,
            height: 0.7,
            types: ['grass', 'poison'],
        },
            {name: 'Ivysaur',
            hp: 60,
            attack: 62,
            defense: 63,
            speed: 60,
            spAttack: 80,
            spDefense: 80,
            height: 1,
            types: ['grass', 'poison'],
        },
            {name: 'Venusaur',
            hp: 80,
            attack: 82,
            defense: 83,
            speed: 80,
            spAttack: 100,
            spDefense: 100,
            height: 2,
            types: ['grass', 'poison'],
        }
    ];
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
        console.log(pokemon);
        }                   
    function getAll() {
		return pokemonList;
	}
	function add(pokemon) {
		pokemonList.push(pokemon);
	}
    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem
    }