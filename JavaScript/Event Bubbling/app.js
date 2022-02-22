const section = document.querySelector('section');
section.addEventListener('click', () => alert('Section'));

const p = document.querySelector('p');
p.addEventListener('click', () => alert('Paragraph'));

const btn1 = document.querySelector('#click');
btn1.addEventListener('click', () => {
    alert('Button clicked')
});

const container = document.querySelector('#container')
function randomColor() {
    let r = Math.ceil(Math.random() * 255);
    let g = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

function colorize() {
    container.style.color = randomColor();
    container.style.backgroundColor = randomColor();
}

container.addEventListener('click', () => {
    container.classList.toggle('hide');
})
const btn2 = document.querySelector('#changeColor');
btn2.addEventListener('click', (e) => {
    e.stopPropagation();
    colorize();
});
