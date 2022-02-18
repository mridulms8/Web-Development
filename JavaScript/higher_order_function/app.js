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

/*function ageRange(min, max) {
    return function (num) {
        return num >= min && num <= max;
    };
}*/
let square = function (num) {
    return num * num;
}
function ageRange(min, max) {
    return function (age) {
        if (age > min && age < max) {
            return true;
        } else {
            return false;
        }
    }
}

const cat = {
    name: 'Blue',
    color: 'grey',
    meow() {
        console.log(`${this.name} says meeeoowwwww`);
    }
}
