const movieReview = [
    { title: 'Inception', score: 8.5, year: 2010 },
    { title: 'Shutter Island', score: 8.2, year: 2011 },
    { title: 'The Departed', score: 8.5, year: 2006 },
    { title: 'Catch me if you can', score: 8.3, year: 2002 }
];

movieReview.every(movie => movie.year > 2009);
movieReview.some(function (movie) {
    return movie.year > 2009;
});