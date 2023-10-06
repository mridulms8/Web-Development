const form = document.querySelector('form');
const addPosters = (posters) => {
    for (let poster of posters) {
        if (poster.show.image) {
            const img = document.createElement('img');
            img.src = poster.show.image.medium;
            // console.log(img.url);
            document.body.append(img);
        }
    }
}
const search = async (show) => {
    try {
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${show}`);
        const posters = res.data;
        // console.log(res);
        addPosters(posters);
    } catch (e) {
        console.log('Not found!!!');
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const show = form[0].value;
    search(show);
    form[0].value = '';
})