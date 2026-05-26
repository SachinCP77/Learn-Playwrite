let scores = [55, 65, 75, 85, 95];
let grades = scores.map(s => s > 65 ? "Pass" : "fail");
console.log(grades);

let passing = scores.filter(s => s > 70) //keeps elements that pass test
console.log(passing);


let total = scores.reduce((a, b) => a + b, 0)  //total
console.log(total);