const movie1 = { title: 'The Departed', score: 8.5 };
const movie2 = { title: 'Catch me if you can', year: 2002 };
const movie = { ...movie1, ...movie2 };
const eivom = { ...movie2, ...movie1 };

const movie3 = { ...movie, year: 2006, starring: 'Leonardo DiCaprio' };

const num = { ...[1, 2, 3, 4, 5] };
const string = { ...'hello' };