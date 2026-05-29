let res = Array.isArray([1, 2, 3]);
//console.log(res);

let res1 = Array.isArray("hello");
//console.log(res1);

//playwrite api
let res2 = [200, 201, 202].every(stcode => stcode > 200); //false all of them has to match
console.log(res2);

let res3 = [200, 201, 202].some(stcode => stcode > 200); //true anyone can match
console.log(res3);
