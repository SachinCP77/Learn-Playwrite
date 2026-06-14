function opennbrow() {
    return new Promise(function (resolve) {
        resolve("Open browser");
    });
}

function gotologin() {
    return new Promise(function (resolve) {
        resolve("login page loded");

    });
}
// opennbrow().then(function (msgf) {

//     return gotologin();
// })

opennbrow().then(function (msg) {
    console.log("step1", msg);
    return gotologin();

});