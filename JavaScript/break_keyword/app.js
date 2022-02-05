let msg = prompt('What do you say?')
while (true) {
    if (msg.toLowerCase() === 'stop' || msg.toLowerCase() === 'stop copying' || msg.toLowerCase() === 'stop copying me') {
        break;
    }
    msg = prompt(msg);
}
alert('OK you win!');
console.log('OK you win!');