const nums = [-2, 3.5, 5.1, 6, 12];
const smallestNum = nums.reduce((min, num) => {
    if (num < min) {
        return num;
    }
    return min;
});

const prodWith100 = nums.reduce((prod, num) => prod * num, 100);

const movieReview = [
    { title: 'Inception', score: 8.5, year: 2010 },
    { title: 'Shutter Island', score: 8.2, year: 2011 },
    { title: 'The Departed', score: 8.5, year: 2006 },
    { title: 'Catch me if you can', score: 8.3, year: 2002 }
];

const bestMovie = movieReview.reduce((best, current) => {
    if (current.score > best.score) {
        return current;
    }
    return best;
})