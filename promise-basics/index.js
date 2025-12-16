/* 
    Task 2
    Delay with a promise

    The built-inf function setTimeout uses callbacks. Create a promise-based alternative.

    The function delay(ms) should return a promise. That promise should resolve after ms miliseconds, so that we can add .then to it.
*/
function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

delay(3000).then(() => console.log("runs after 3 seconds"));
