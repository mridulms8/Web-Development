const seatingList = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffery', 'Juanita', 'Antonio', 'Kevin'],
    ['Yumo', 'Sakura', 'Jack', 'Erika']
];
const colors = ['red', 'black', 'green', 'blue'];
for (let i = 0; i < colors.length; ++i) {
    console.log(colors[i]);
}

console.log('For...Of loop:');
for (let shade of colors) {
    console.log(shade);
}

console.log(seatingList);
for (let row of seatingList) {
    for (seat of row) {
        console.log(seat);
    }
}
