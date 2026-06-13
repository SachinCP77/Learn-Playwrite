function testes(testname, calbk) {
    console.log("call");
    calbk();

}

testes("Verify login page", () => {
    console.log("login page called");
});
