let testrun = new Promise(function (resolve, reject) {
    reject(" Assertion failed");
}).catch(function (error) {
    console.log(error);

}).finally(function () {
    console.log(" I will run always");
});

