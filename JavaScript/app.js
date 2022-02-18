const movieReview = [
    { title: 'Inception', score: 8.5, year: 2010 },
    { title: 'Shutter Island', score: 8.2, year: 2011 },
    { title: 'The Departed', score: 8.5, year: 2006 },
    { title: 'Catch me if you can', score: 8.3, year: 2002 }
];
const goodMovie = movieReview.filter(movie => {
    return movie.score >= 8.5;
});
const badMovie = movieReview.filter(movie => {
    return movie.score < 8.5;
});
const Movies = movieReview.filter(m => m.score >= 8.5).map(m => m.title);

function greet(name, msg = "Hello", punc = '!') {
    console.log(`${msg} ${name}${punc}`);
}

