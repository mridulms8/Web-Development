let sum = function (x, y) {
    return x + y;
};

const add = (x, y) => {
    return x + y;
}

const square = x => {
    return x * x;
}

const print = () => {
    console.log('hello!'.toUpperCase());
}

// IMPLICIT RETURNS
sum = (x, y) => (
    x + y
);

let double = x => 2 * x; // one-liner arrow function

const tomatoRating = [
    { title: 'Inception', score: 87 },
    { title: 'Shutter Island', score: 68 },
    { title: 'The Departed', score: 90 }
];

const imdb = tomatoRating.map(movie => (
    `${movie.title} - ${movie.score / 10}`
));