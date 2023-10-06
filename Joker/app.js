const jokes = require("give-me-a-joke");
// console.log(jokes);
const colors = require('colors');
console.log('Look at the', "RAINBOW".rainbow);
jokes.getRandomDadJoke(function(joke){
    console.log(joke);
})