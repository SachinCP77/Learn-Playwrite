// ============================================================
// null vs undefined in JavaScript
// ============================================================

//
// 1. undefined
// -----------
// `undefined` means a variable has been declared but has not been assigned a value yet.
// It is automatically assigned by JavaScript.
//

let userName;
console.log(userName);           // undefined (declared but not assigned)
console.log(typeof userName);    // "undefined"

// Another common source of undefined: accessing an object property that doesn't exist
let person = { age: 25 };
console.log(person.name);        // undefined (property doesn't exist)

// Or a function that doesn't return anything
function greet() {
  // no return statement
}
console.log(greet());              // undefined


//
// 2. null
// -------
// `null` is an assignment value that represents "no value" or "empty".
// It must be assigned explicitly by the programmer.
// It is often used to intentionally indicate that a variable should be empty.
//

let userEmail = null;
console.log(userEmail);            // null
console.log(typeof userEmail);     // "object"  (this is a known bug in JavaScript)


//
// 3. Key Differences (Simple Summary)
// ------------------------------------
//
// | Feature      | undefined                         | null                              |
// |--------------|-----------------------------------|-----------------------------------|
// | Meaning      | "I don't exist yet"               | "I exist, but I am empty"         |
// | Who sets it? | JavaScript (automatically)        | Programmer (manually)             |
// | Type         | undefined                         | object (historical bug)           |
// | Use case     | Unintentional missing value       | Intentional empty value           |
//


//
// 4. Equality Check
// -----------------
// `==` sees them as equal (loose equality performs type coercion)
// `===` sees them as different (strict equality checks type too)
//

console.log(null == undefined);    // true  (loose equality)
console.log(null === undefined);   // false (strict equality)


//
// 5. Practical Example
// --------------------

let apiResponse = null;            // We haven't fetched data yet, so it's intentionally empty

function fetchData() {
  // simulate fetching data
  apiResponse = { id: 1, title: "Hello World" };
}

console.log(apiResponse);          // null (we explicitly set it to nothing)
fetchData();
console.log(apiResponse);        // { id: 1, title: "Hello World" }


//
// 6. When to use what?
// --------------------
//
// Use `undefined`:
//   - Let JavaScript handle it (don't assign undefined manually).
//   - Check if a variable/property exists.
//
// Use `null`:
//   - When you want to intentionally clear a value.
//   - When you want to represent "no object" or "empty".
//   - Initializing variables that will hold objects later.
//

let score;                        // undefined — hasn't been set
score = 100;                      // now it has a value
score = null;                     // null — we decided to clear the score

console.log(score);               // null
