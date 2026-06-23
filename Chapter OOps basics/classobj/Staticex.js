class student {
    constructor(names, ages, phonenos) {
        this.names = names;
        this.ages = ages;
        this.phonenos = phonenos;
    }
    static name = "2x batch";
    static mentor = "Pramod";
}

let s1 = new student("Yash", 32, "4455666");
let s2 = new student("Yasheee", 342, "445dd5666");
console.log(s1.names);
console.log(s2.ages);
console.log(student.mentor);
console.log(student.name);
