let a = { status: "Pass" };
console.log(a.status);
console.log(a["status"]);

let std1 = { name: "Sachin", age: 35, rollno: 123 };
let std2 = { name: "Amit", rolno: 2345 }
console.log(std1.rollno);

let b = std1;
console.log(b.rollno);


b.rollno = 555;
console.log(b.rollno);
console.log(std1.rollno);