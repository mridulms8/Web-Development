Math
let maximum = parseInt(prompt('Enter the maximum number:'));
while (!maximum) {
    maximum = parseInt(prompt('Enter a valid number:'));
}
const targetNum = Math.ceil(Math.random() * maximum);
let guess = parseInt(prompt('Enter your first guess!'));
let attempts = 1;
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') {
        alert('OK YOU ARE QUITTING.');
        console.log('OK YOU ARE QUITTING.');
        break;
    }
    attempts++;
    if (parseInt(guess) > targetNum) {
        guess = (prompt('TOO HIGH. GUESS AGAIN:'));
    } else {
        guess = (prompt('TOO LOW. GUESS AGAIN"'));
    }
}
if (guess === 'q') {
    console.log('BETTER LUCK NEXT TIME!');
    alert('BETTER LUCK NEXT TIME!');
} else {
    console.log(`CONGRATULATIONS! YOU GOT IT IN ${attempts} GUESSES`);
    alert(`CONGRATULATIONS! YOU GOT IT IN ${attempts} GUESSES`);
}