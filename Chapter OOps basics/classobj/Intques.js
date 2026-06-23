class browser {
    constructor(name) {
        this.name = name;
        this.IsOpen = true;

        console.log(name, "-", "Launched");

    }

    statbrow() {
        console.log("st browser");

    }

    closbrow() {
        console.log("close browser");

    }
}

let chr = new browser("chrome");
let firfox = new browser("firefox");
console.log(chr.IsOpen);
