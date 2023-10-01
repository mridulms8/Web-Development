const fakeRequestPromise = url => {
    return new Promise((resolve, reject) => {
        const delay = 500 + Math.floor(Math.random() * 4500);
        setTimeout(() => {
            if (delay < 4000) {
                resolve(`Here is your data from ${url}`);
            } else reject('Connection Timeout :(');
        }, delay);
    })
}
fakeRequestPromise('books.com')
    .then((data) => {
        console.log('IT WORKED!!! (main page)');
        console.log(data);
        fakeRequestPromise('books.com/Page1')
            .then((data) => {
                console.log("IT WORKED!!! (page1)")
                console.log(data);
                fakeRequestPromise('books.com/Page2')
                    .then((data) => {
                        console.log('IT WORKED!!! (page2)')
                        console.log(data);
                    })
                    .catch((data) => {
                        console.log('POMISE REJECTED!')
                        console.log(data);
                    })
            })
            .catch((data) => {
                console.log('PROMISE REJECTED!');
                console.log(data)
            })
    })
    .catch((data) => {
        console.log('PROMISE REJECTED!');
        console.log(data);
    })