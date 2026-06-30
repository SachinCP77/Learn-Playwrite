class testcase {
    execute() {
        console.log("Runing generic test");

    }
}

class unitest extends testcase {
    execute() {
        console.log("Runing unit test");

    }

}
class apitc extends testcase {
    execute() {
        console.log("Runing api test");

    }

}

let tests = [new unitest(), new apitc()];

tests.forEach(function (test) {
    test.execute()
});