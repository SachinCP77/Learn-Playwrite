class bug {
    constructor(title, sevrity) {
        this.title = title;
        this.sevrity = sevrity;

    }

    display() {
        console.log(this.sevrity, "-", this.title);

    }

}

let b1 = new bug("Login", "High");
let b2 = new bug("Checkout", "Low");

b1.display();
b2.display();