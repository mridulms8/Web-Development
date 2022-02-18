const elements = [1, 2, 3, 4, 5];
/*for (el of elements) {
    console.log(el);
}*/

function print(element) {
    console.log(element);
}

elements.forEach(print);

elements.forEach(function (el) {
    console.log(el);
});

const movieReview = [
    { title: 'Inception', score: 87 },
    { title: 'Shutter Island', score: 68 },
    { title: 'The Departed', score: 90 }
];

// movieReview[0].title - movieReview[0].score/100
movieReview.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`);
});


console.log('-----------MAP------------');

const doubles = elements.map(function (el) {
    return el * 2;
});

const titles = movieReview.map(function (movie) {
    return movie.title;
});