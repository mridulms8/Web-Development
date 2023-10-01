function fakeRequestTimeout(url, success, failure) {
    let delay = 500 + Math.floor(Math.random() * 4000);
    setTimeout(() => {
        if (delay < 4000) {
            success(`${url} found successfully!!`);
        } else {
            failure("Page Not Found, Connection Timeout :(");
        }
    }, delay);
}

fakeRequestTimeout('books.com', (msg) => {
    console.log(msg);
    fakeRequestTimeout('books.com/Page1', (msg) => {
        console.log(msg);
        fakeRequestTimeout('books.com/Page2', (msg) => {
            console.log(msg);
        }, (err) => {
            console.log(err);
        })
    }, (err) => {
        console.log(err);
    })
}, (err) => {
    console.log(err);
});