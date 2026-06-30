interface testcase {
    id: number;
    name: string;
    staus: string;
    duration: number
}

let test1: testcase = {
    id: 1,
    name: "login",
    staus: "Pass",
    duration: 300

}
let test2: testcase = {
    id: 2,
    name: "Order",
    staus: "Fail",
    duration: 200

}

console.log(test1.id, ":", test1.name, ":", test1.staus, ":", test1.duration);
console.log(test2.id, ":", test2.name, ":", test2.staus, ":", test2.duration);