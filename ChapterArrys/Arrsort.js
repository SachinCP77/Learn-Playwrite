let fruits = ["cherry", "banana", "apple"];
console.log(fruits.sort());

let num = [10, 1, 31, 3] // natrural sort

console.log(num.sort());


let nums = [10, 1, 31, 3];
nums.sort((a, b) => a - b);
nums.sort((a, b) => b - a);
console.log(nums);
