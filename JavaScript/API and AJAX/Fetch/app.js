// fetch('https://swapi.dev/api/people/1/')
//     .then((res) => {
//         console.log(res);
//         return res.json();
//     })
//     .then(data => console.log(data.name))
//     .catch((err) => {
//         console.log(err);
//     })
const request = async () => {
    try {
        const res = await fetch('https://swapi.dev/api/people/1/');
        const data = await res.json();
        console.log(data);
        const res2 = await fetch('https://swapi.dev/api/people/2/');
        const data2 = await res2.json();
        console.log(data2)
    } catch (e) {
        console.log('ERROR 404!!!');
        console.log(e);
    }
}

request();
