// function asyncMethod(message) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             console.log(message);
//             resolve();
//         }, 500);
//     });
// }

// function findUser() {
//     return asyncMethod('Find User')
// }

// function validateUser() {
//     return asyncMethod('Validate User')
// }

// function doStuff() {
//     return asyncMethod('Do stuff')
// }

// asyncMethod('Open DB connection')
//     .then(findUser)
//     .then(validateUser)
//     .then(doStuff)
//     .then(function() {});

function asyncMethod(message) {
    return new Promise(function(resolve, reject) {
        //console.log('p1');
        setTimeout(function() {
            console.log(message);
            resolve();
        }, 500);
    });
}

async function main() {
    var one = await asyncMethod('Open DB connection');
    console.log('hello');
    var two = await asyncMethod('Find User');
    var three = await asyncMethod('Validate User');
    var four = await asyncMethod('Do stuff');
}

main();
