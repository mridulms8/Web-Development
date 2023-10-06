// fetch('https://swapi.dev/api/people/1')
//     .then(res => {
//         console.log('IT WORKED!');
//         return res.json()
//     })
//     .then(res =>{
//         console.log(res);
//         return fetch('https://swapi.dev/api/people/2')
//     })
//     .then(res=>{
//         console.log('IT WORKED!');
//         return res.json();
//     })
//     .then(res=>{
//         console.log(res);
//     })
//     .catch(err=>{
//         console.log(err);
//     })

async function request(){
    try{
        const res = await fetch('https://swapi.dev/api/people/1');
        const data = await res.json();
        console.log(data);
        const res2 = await fetch('https://swapi.dev/api/people/2');
        const data2 = await res2.json();
        console.log(data2);
    } catch(e){
        console.log('ERROR!!!', e);
    }
}
request();