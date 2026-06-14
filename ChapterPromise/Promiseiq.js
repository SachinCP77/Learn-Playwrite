// let p = new Promise(function (resolve, reject) {
//     resolve(43);

// });
// p.then(function (value) {

//     console.log("Ans", value);

// });


// let pr = new Promise(function (resolve, reject) {

//     reject("some error came");
// });

// pr.catch(function (err) {

//     console.log("Caught", err);
// });

// let prt = Promise.resolve(44);
// prt.then(function (val) {
//     return val * 10;

// }).then(function (val) {
//     console.log(val);
// });

// Promise.resolve("start")
//     .then(function (val) {
//         console.log(val);
//         throw new Error("broke at stp2");


//     })
//     .then(function () {

//         console.log("this will not run");

//     })

// let t1 = Promise.resolve("Pass");
// let t2 = Promise.reject("fail");
// let t3 = Promise.resolve("Pass");


// Promise.all([t1, t2, t3])
//     .then(function (r) {
//         console.log(r)
//     })

//     .catch(function (err) {
//         console.log(err);
//     });

Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 200")
]).then(function (res) {
    res.forEach(function (r) {
        console.log(r);

    });


});

