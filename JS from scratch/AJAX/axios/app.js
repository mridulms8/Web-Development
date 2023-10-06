const request = async (id)=>{
    try{
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(res);
    } catch(e){
        console.log('ERROR', e);
    }
}
request(1);
request(10);