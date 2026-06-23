class testcase {
    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;

    }

    display() {
        console.log(this.name, "-", this.status, "-", this.priority);

    }
}

let logintc = new testcase("Login", "Pass", "P1");
let ordertc = new testcase("Order", "Fail", "P3");

logintc.display();
ordertc.display();
