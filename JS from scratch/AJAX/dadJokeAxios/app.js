const btn = document.querySelector('button');
const ul = document.querySelector('ul');

const addJoke = async () => {
    let jokeText = await dadJoke();
    const li = document.createElement('li');
    li.innerText = jokeText;
    ul.appendChild(li);
}
const dadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } };
    try {
        const res = await axios.get('https://weicanhazdadjoke.com', config);
        return res.data.joke;
    } catch(e){
        return "NO JOKES AVAILABLE";
    }
}
btn.addEventListener('click', addJoke);