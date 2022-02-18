const btn = document.querySelector('#b2');

btn.onclick = function () {
    console.log('You clicked the second button.');
}

btn.onmouseenter = () => console.log("Click Me!");

document.querySelector('h1').onmouseenter = () => console.log('EVENT BASICS!');

