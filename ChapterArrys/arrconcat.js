let a = [2, 3, 4];
let b = [7, 6, 8];

let c = a.concat(b);

console.log(c);

let d = [...a, ...b]; //spread, ... means all elements
console.log(d);


let s = ["Pass", "fail", "blocked"].join(" ");
console.log(s);