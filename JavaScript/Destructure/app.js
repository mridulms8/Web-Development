const marks = [95, 93, 91, 85, 74, 69];
const [first, second, third, ...everyoneElse] = marks;

const user = {
    firstName: 'Matthew',
    lastName: 'McConaughey',
    born: 1969,
    email: 'mattymackie@gmail.com',
    password: 'noobmaster'
};

const FirstName = user.firstName;
const LastName = user.lastName;

const { firstName, lastName, email } = user;
const { born: birthyear } = user;

const { password = "noobydoobydoo", address = 'N/A' } = user;

function fullname(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`
}

function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}

const movieReview = [
    { title: 'Inception', score: 8.5, year: 2010 },
    { title: 'Shutter Island', score: 8.2, year: 2011 },
    { title: 'The Departed', score: 8.5, year: 2006 },
    { title: 'Catch me if you can', score: 8.3, year: 2002 }
];

const goodMovie = movieReview.filter((movie) => movie.score >= 8.5);

movieReview.map(({ title, year, score }) => {
    return `${title} (${year}) has rating of ${score}/10`;
});