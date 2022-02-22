function randomColor() {
    let r = Math.ceil(Math.random() * 255);
    let g = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

function colorize() {
    this.style.color = randomColor();
    this.style.backgroundColor = randomColor();
}

const div = document.querySelector('div');

for (let i = 0; i < 36; ++i) {
    let btn = document.createElement('button');
    btn.innerText = 'CLICK';
    div.append(btn);
}
const buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.addEventListener('mouseenter', colorize);
}
const section = document.querySelector('section')
for (let i = 0; i < 10; ++i) {
    let h1 = document.createElement('h1');
    h1.innerText = "Time flies but you can't"
    section.append(h1);
}

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.addEventListener('mouseenter', colorize);
}
