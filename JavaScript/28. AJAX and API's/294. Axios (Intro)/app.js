// axios.get("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log("DELIVERED!", res);
//     })
//     .catch((e) => {
//         console.log(e);
//     });

const loadSWP = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data.name);
    }
    catch (e) {
        console.log(e);
    }
}

loadSWP(5);
loadSWP(2);
