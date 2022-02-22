const h1 = document.createElement('h1');

h1.innerText = 'rgb BACKGROUND';
h1.style.textAlign = 'center';

const nav = document.querySelector('nav');
nav.append(h1);

const btn = document.querySelector('#rgb');
const body = document.querySelector('body');

btn.addEventListener('mouseenter', () => {
    body.style.backgroundColor = `rgb(${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 255)})`;
    btn.style.color = body.style.backgroundColor;
    btn.style.borderColor = `rgb(${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 255)})`;
    h1.style.color = `rgb(${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 255)})`;
    h1.innerText = `rgb(${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 255)})`;
})


