let suitres = [
    ["Login-pass", "search-pass", "logout-pass"],
    ["serach-pass", "filter-fail", "sort-pass"],
    ["checkout-fail", "payement-fail", "confirm-fail"]
];
for (let i = 0; i < suitres.length; i++) {
    for (let j = 0; j < suitres.length; j++) {
        if (suitres[i][j].includes("fail")) {
            console.log(suitres[i][j]);

        }

    }
}