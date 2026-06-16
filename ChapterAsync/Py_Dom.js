function openbrower() {
    return new Promise(function (resolve) {
        resolve("Brow opened");
    });
}

function gotologin() {
    return new Promise(function (resolve) {
        resolve("login opened");
    });
}

function entercred() {
    return new Promise(function (resolve) {
        resolve("cred entered");
    });
}

function clicklgin() {
    return new Promise(function (resolve) {
        resolve("clicked lgin");
    });
}

async function rune2e() {
    let msg1 = await openbrower;
    console.log("Step1", msg1);
    let msg2 = await clicklgin;
    console.log("Step2", msg2);
}

rune2e();