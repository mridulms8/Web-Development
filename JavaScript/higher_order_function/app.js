/*function callThreeTimes(func) {
    func();
    func();
    func();
}

function rollDie() {
    console.log(Math.ceil(Math.random() * 6));
}

callThreeTimes(rollDie);*/

// function as a return value
/*function typeOfFunction() {
    let rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("I AM A GOOD FUNCTION!");
        };
    } else {
        return function () {
            console.log('I AM A BAD FUNCTION!');
        };
    }
}*/

function ageRange(min, max) {
    return function (num) {
        return num >= min && num <= max;
    };
}
