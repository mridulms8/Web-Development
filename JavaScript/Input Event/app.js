const input = document.querySelector('#text');
const h1 = document.querySelector('h1');

// input.addEventListener('change', (e) => {
//     console.log(input.value);
// })

input.addEventListener('input', (e) => {
    if (input.value === '') {
        h1.innerText = 'hi';
    } else {
        h1.innerText = input.value;
    }
})


