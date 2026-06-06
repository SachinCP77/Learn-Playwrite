let a = 10;
let b = a;  //primitive variable
b = 99;

//console.log(a);

//objects copy by refernce.
let obj1 = { val: 10 }
let obj2 = obj1;
obj2.val = 88;
console.log(obj1.val);


//primitive will create new copy and object ref will cpoy existing one