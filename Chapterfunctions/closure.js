function outer() {
    let mess = "hello";
    console.log("Outer");
    function inner() {
        console.log(mess);

    }
    return inner;
}

let fnc = outer();
fnc();