const form = document.querySelector('#movieSurvey');
const movieList = document.querySelector('#movieList');

function movieItem(movie, director) {
    const li = document.createElement('li');
    li.innerHTML = `<i><b>${movie.value}</b> - ${director.value}</i>`;
    movieList.append(li);
}

form.addEventListener('submit', (e) => {
    const movie = form.elements.movie;
    const director = form.elements.director;
    e.preventDefault();
    movieItem(movie, director);
    movie.value = '';
    director.value = '';
})

movieList.addEventListener('click', (e) => {
    e.target.nodeName === 'LI' && e.target.remove();
})