const btn = document.querySelector('#color');
const body = document.querySelector('body');
const nav = document.querySelector('nav');
const theme = document.getElementById('color');
const html = document.querySelector('html');
const m = document.getElementById('name');
const home = document.getElementById('home');
// const img = document.querySelector('img');

let num = 0;

m.addEventListener('click', () => {
    html.style.display = 'none';
})

home.addEventListener('click', () => {
    body.style.backgroundColor = 'rgb(227, 137, 191)';
    theme.innerHTML = 'Original';
    nav.style.backgroundColor = '#72cdd6';
})
nav.style.transition = 'all 0.5s';
body.style.transition = 'all 0.5s';
theme.style.transition = 'all 0.5s';

btn.addEventListener('click', () => {
    num++;
    if (num === 1) {
        body.style.backgroundColor = '#eff36e';
        theme.innerHTML = "Almond";
        nav.style.backgroundColor = `#d0c2f1`;
    } else if (num === 2) {
        body.style.backgroundColor = '#9fe8f6';
        theme.innerHTML = "Quinoa";
        nav.style.backgroundColor = '#5260a4';
    } else if (num === 3) {
        body.style.backgroundColor = '#9fe8f6';
        theme.innerHTML = 'Sea Salt';
        nav.style.backgroundColor = '#f1a48a';
    } else if (num === 4) {
        body.style.backgroundColor = '#b6ecc5'
        theme.innerHTML = 'Milk';
        nav.style.backgroundColor = '#c386d6';
    } else if (num === 5) {
        body.style.backgroundColor = 'rgb(227, 137, 191)';
        theme.innerHTML = 'Original';
        nav.style.backgroundColor = '#72cdd6';
        num = 0;
    }
    console.log(num);
});