class bankact {
    #balance = 0;

    deposit(amt) {
        if (amt > 0) {
            this.#balance += amt;

        }

    }
    getbal() {

        return this.#balance;
    }


}

let acct = new bankact();
acct.deposit(1000);
console.log(acct.getbal());
