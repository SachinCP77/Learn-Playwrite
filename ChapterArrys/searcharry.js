let res = ["Pass", "fail", "blck", "error", "fail"];
console.log(res.indexOf("blck"));
console.log(res.lastIndexOf("fail"));
console.log(res.includes("fail"));
console.log(res.includes("failed"));

let num = [10, 20, 30, 40, 50];
console.log(num.find(x => x > 10));
console.log(num.findIndex(x => x > 10));
console.log(num.findLast(x => x > 10));
console.log(num.findLastIndex(x => x > 10));