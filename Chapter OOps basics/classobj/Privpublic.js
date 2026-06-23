class creden {

    #apikey;  //private variable
    user; //public varible

    constructor(user, key) {
        this.#apikey = key;
        this.user = user;
    }
    getauth() {
        return "Api key is", this.#apikey;

    }
}

let cre = new creden("Admin", "Key1234");
console.log(cre.user);
//console.log(cre.key);

let res = cre.getauth();
console.log(res);
