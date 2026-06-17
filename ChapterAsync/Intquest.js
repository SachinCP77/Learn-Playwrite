async function sayhello() {

    return "Hello";
}

sayhello().then(function (msg) {
    console.log(msg);

})

async function getstat() {
    let stat = await Promise.resolve(200);
    console.log("Stat code", stat);


}

getstat();