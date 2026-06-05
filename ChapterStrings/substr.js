let str2 = "Login_Pass_Test_001";

console.log(str2.slice(0, 5));
console.log(str2.slice(13));
console.log(str2.slice(-3));// negative index  allowed in slice
console.log(str2.includes("Test"));
console.log(str2.substring(6, 10)); // negative index not allowed in substring
console.log(str2.at(3));
