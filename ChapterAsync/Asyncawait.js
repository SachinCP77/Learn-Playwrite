function apicall(name) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(name, "200");
        }, 1000)
    }

    )
}


async function seq() {
    console.log("start test");
    let start = Date.now();

    let r1 = await apicall("login");
    console.log(r1);

    let r2 = await apicall("Dashbaord");
    console.log(r2);

    let r3 = await apicall("Rpt");
    console.log(r3);

}

seq();