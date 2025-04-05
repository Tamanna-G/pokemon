let pokemonList = [
    {
        name: 'Bulbasaur',
        hp: 45,
        attack: 49,
        defense: 49,
        speed: 45,
        spAttack: 65,
        spDefense: 65,
        height: 0.7,
        types: ['grass', 'poison'],
    },
    {
        name: 'Ivysaur',
        hp: 60,
        attack: 62,
        defense: 63,
        speed: 60,
        spAttack: 80,
        spDefense: 80,
        height: 1,
        types: ['grass', 'poison'],
    },
    {
        name: 'Venusaur',
        hp: 80,
        attack: 82,
        defense: 83,
        speed: 80,
        spAttack: 100,
        spDefense: 100,
        height: 2,
        types: ['grass', 'poison'],
    },
];
//for loop iterates over each item in pokemonList
for (let i = 0; i < pokemonList.length; i++) {
    let name = pokemonList[i].name;
    let height = pokemonList[i].height;
//highlight Pokemon with height > 1 with "Wow, that's big!"
    let text =
        height > 1
            ? `<span class="card__front--name">${name}</span> (height: ${height}) - Wow, that's big!`
            : `<span class="card__front--name">${name}</span> (height: ${height})`;

    document.write(`<div class="card__front">${text}</div>`);
}
