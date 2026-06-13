let order = new Promise(function (resolve, reject) {
    let foodready = true;

    if (foodready) {
        resolve("order ready");
    }
    else {
        reject("order reject");
    }
})

console.log(order);
