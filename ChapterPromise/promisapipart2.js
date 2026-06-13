let apicall = new Promise(function (resolve, reject) {
    reject(" 500 error");

});


apicall.catch(function (error) {
    console.log(error);

});