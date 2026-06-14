let autchk = Promise.resolve("Aut ok");
let dbchk = Promise.resolve("DB ok");
let chkcatche = Promise.resolve("Catch ok");


Promise.all([autchk, dbchk, chkcatche]).then(function (reslut) {
    console.log("All is ok");


});