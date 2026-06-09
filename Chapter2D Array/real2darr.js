let testmatrix = [
    ["login", "Pass", 200],
    ["checkut", "fail", 404],
    ["Search", "Pass", 100],
];

for (i = 0; i < testmatrix.length; i++) {

    for (j = 0; j < testmatrix[i].length; j++) {
        console.log(testmatrix[i][j]);

    }
    console.log("\n");

}

testmatrix.forEach(row => {
    row.forEach(
        cell => process.stdout.write(cell + ",")
    );
    console.log("\n");
});
