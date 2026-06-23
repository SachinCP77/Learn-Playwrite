class car {

    //CAB
    //Constrcutr
    constructor(namegiven) {
        this.name = namegiven;
    }

    //attribute

    //behaviour
    drive() {
        console.log("Which car", this.name);

    }
}

const tesla = new car("Model S");
tesla.drive();

const i20 = new car("i20 car");
i20.drive();