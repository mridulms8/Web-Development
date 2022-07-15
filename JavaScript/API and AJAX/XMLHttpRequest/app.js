const req = new XMLHttpRequest();

req.onload = () => {
    console.log('IT WORKED!!!');
    const data = JSON.parse(req.responseText)
    console.log(data.name, data.height);
};

req.onerror = () => {
    console.log('ERROR 404, Not Found!!!')
    console.log(this);
};

req.open('GET', 'https://swapi.dev/api/people/1');
req.send();