class envn {
    constructor(name = "stag", port = 400) {
        this.name = name;
        this.port = port;
    }

    geturl() {
        return ("http://" + this.name + ":" + this.port);
    }
}

let env1 = new envn();
let env2 = new envn("prod", 3000);

console.log(env1.geturl());
console.log(env2.geturl());