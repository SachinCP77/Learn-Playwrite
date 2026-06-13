function prt() {
    console.log("Normal fn is called");

}

function placeorder(clp, callbk) {
    console.log("your order is placed");
    callbk();

}

//placeorder("Pizzaa", prt)
placeorder("Pizzaa", function () {
    console.log("Annonmous fn is called");
});

placeorder("Momos", () => {
    console.log("Arrow fn is called");
});