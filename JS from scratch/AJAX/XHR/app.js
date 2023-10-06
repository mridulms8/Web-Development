const req = new XMLHttpRequest();

req.onload = function(){
    console.log('IT WORKED!');
    const data = JSON.parse(this.response);
    console.log(data.name, data.height);
}
req.onerror = function(){
    console.log('ERROR!!!');
    console.log(this);
}

req.open('GET','https://swapi.dev/api/people/1/');
req.send();