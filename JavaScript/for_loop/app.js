console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

console.log("LOOP");
for (let i = 1; i <= 10; ++i) {
    console.log(i);
}

const seatingList = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffery', 'Juanita', 'Antonio', 'Kevin'],
    ['Yumo', 'Sakura', 'Jack', 'Erika']
];
for (let i = 0; i < seatingList.length; ++i) {
    const row = seatingList[i];
    console.log(`Row #${i + 1}:`)
    for (let j = 0; j < row.length; ++j) {
        console.log(row[j]);
    }
}