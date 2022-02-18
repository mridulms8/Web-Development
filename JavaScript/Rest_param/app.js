function sumAll() {
    let total = 0;
    for (i = 0; i < arguments.length; ++i) {
        total = total + arguments[i];
    }
    return total;
}

function sum(...num) {
    return num.reduce((total, el) => total + el);
}

function medalCeremony(gold, silver, ...everyoneElse) {
    console.log(`Gold medal winner is : ${gold}`)
    console.log(`Silver medal winner is : ${silver}`)
    console.log(`Other participants were : ${everyoneElse}`)
}