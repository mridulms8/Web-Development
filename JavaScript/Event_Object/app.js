const btn = document.querySelector('button');
btn.addEventListener('click', function (event) {
    console.log(event);
});

const input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'ArrowUp':
            console.log(e.code);
            break;
        case 'ArrowDown':
            console.log(e.code);
            break;
        case 'ArrowLeft':
            console.log(e.code);
            break;
        case 'ArrowRight':
            console.log(e.code);
            break;
        default:
            console.log('IGNORED');
    }
})