const container = document.querySelector('#container');
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 151; ++i) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const newImage = document.createElement('img');
    newImage.src = `${baseUrl}${i}.png`;
    pokemon.append(newImage);
    const span = document.createElement('span');
    span.innerText = `#${i}`;
    pokemon.append(span);
    container.append(pokemon);
}
/*
<div>
    img
    <span>1<span>
</div>
*/