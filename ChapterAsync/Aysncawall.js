function apicall(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name, "200 Ok")
        }, 1000);
    })
}

async function paralletest() {
    let [r1, r2, r3] = await Promise.all([

        apicall("Authservice"),
        apicall("USer account"),
        apicall("Support page")
    ])
    console.log(r1);
    console.log(r2);
    console.log(r3);

}

paralletest();