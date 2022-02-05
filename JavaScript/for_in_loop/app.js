const list = {
    pen: 2,
    isBlue: true,
    weight: '3g'
};
console.log('For...In loop:');
for (let item in list) {
    console.log(`${item} : ${list[item]}`);
}

console.log('Description:')
const description = Object.keys(list);
for (let part of description) {
    console.log(part);
}

console.log('Respective data:')
const data = Object.values(list);
for (let num of data) {
    console.log(num);
}

console.log("Combined data:")
const keyValue = Object.entries(list);
for (let row of keyValue) {
    for (let column of row) {
        console.log(column);
    }
}
