console.log('Hey');
setTimeout(() => {
    console.log('You are smart...')
}, 1000);
setTimeout(() => {
    console.log('sometimes.');
}, 2600)
setTimeout(() => {
    console.log('Most of the times you are STUPID!');
}, 3500);

let i = 0;
const id = setInterval(() => {
    console.log(`Estupido! ${++i} times`);
}, 4000);