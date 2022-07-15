const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials';
    if (password === 'sunrisesinthewest') return 'Welcome!';
    else throw 'Invalid Password';
}

// login('mrflippitygibit')
//     .then(msg => {
//         console.log(msg)
//     })
//     .catch(err => {
//         console.log(err);
//     })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            document.body.style.backgroundColor = color;
        }, delay)
    })
}
document.body.style.transition = 'background-color 500ms';

async function rainbow() {
    await delayedColorChange('red', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('indigo', 1000);
    await delayedColorChange('violet', 1000);
    return 'All Done';
}

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

const twoFakeRequests = async () => {
    try {
        data1 = await fakeRequestPromise('/page1');
        console.log(data1);
        data2 = await fakeRequestPromise('/page2');
        console.log(data2);
    } catch (e) {
        console.log("ERROR!!!")
    }
}