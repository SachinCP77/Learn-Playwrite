let apiready = new Promise(function (resolve, reject) {

    resolve({
        status: 200, body: "User data"
    })
});

apiready.then(function (response) {
    console.log(response);

});