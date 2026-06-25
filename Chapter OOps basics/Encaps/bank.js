class icici {
    #balance;
    constructor(name, balance) {
        this.name = name;
        this.#balance = balance;
    }
    getbal() {
        return this.#balance
    }

    setbal(balance, isclerk) {
        if (isclerk) {
            this.#balance = balance;
        }
        else {
            console.log("not allowed");

        }
    }
}

let pramd = new icici("Pramod", 1000);
console.log(pramd.getbal());
pramd.setbal(2000, true)
console.log(pramd.getbal());