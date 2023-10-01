const h1 = document.querySelector('h1');
const btn = document.querySelector('button');
document.body.style.textAlign = 'center';
// h1.style.textAlign = 'center';
// btn.style.margin = 'auto';
let rgb = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}
btn.addEventListener('click', () => {
    const body = document.body;
    body.style.backgroundColor = rgb();
    h1.innerText = rgb();
});
btn.style.border = '3px solid black';
btn.style.fontWeight = 'bold'