class car {
    #engine;
    constructor(name, enginenm) {
        this.name = name;
        this.#engine = enginenm;

    }

    getengine() {
        return this.#engine;

    }

    setengine(enginenm) {
        this.#engine = enginenm;

    }



}
let testla = new car("Tesla", "V8");
console.log(testla.getengine());
testla.setengine("V9");
console.log(testla.getengine());
