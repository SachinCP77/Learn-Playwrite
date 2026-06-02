function reslogin(testfn, testname) {
    let result = testfn();
    return result;
}

function lgtest() {
    return "pass";
}

function lgtestfail() {
    return "fail";
}

let rt = reslogin(lgtest, "Login test");
console.log(rt);
let rt1 = reslogin(lgtestfail, "Login test");
console.log(rt1);