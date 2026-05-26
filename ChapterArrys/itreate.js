let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

for (test of tests) {
    console.log(test);
}

tests.forEach((test, index) => {
    console.log(test, index);
}
)