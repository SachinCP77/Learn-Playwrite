// ============================================================
// JAVASCRIPT IDENTIFIERS - Complete Examples
// ============================================================

// ------------------------------------------------------------
// 1. VALID IDENTIFIERS
// ------------------------------------------------------------

// Letters (case-sensitive)
let name = "valid";
let Name = "also valid - different variable";
let myVariable = 10;

// Underscore start
let _private = "convention for private";
let _ = "just underscore";
let _123 = "underscore then numbers";

// Dollar sign start
let $element = "common for DOM/jQuery";
let $ = "just dollar sign";
let $123 = "dollar then numbers";

// Mixed alphanumeric
let user1 = "number at end";
let user2name = "numbers in middle";
let camelCase = "standard convention";
let PascalCase = "class/constructor convention";
let snake_case = "alternative style";

// Unicode letters
let αβγ = "greek letters";
let 变量 = "chinese characters";
let переменная = "cyrillic letters";

// Unicode escape sequences
let \u0041BC = "evaluates to ABC";
let \u0024 = "evaluates to $";
let \u005F = "evaluates to _";


// ------------------------------------------------------------
// 2. INVALID IDENTIFIERS (Uncomment to see SyntaxError)
// ------------------------------------------------------------

// let 1stPlace = "invalid";       // Cannot start with digit
// let my-var = "invalid";         // Hyphens not allowed
// let my var = "invalid";         // Spaces not allowed
// let @username = "invalid";      // @ not allowed
// let #hash = "invalid";          // # not allowed (private class fields are different)
// let my!var = "invalid";         // Special characters not allowed


// ------------------------------------------------------------
// 3. RESERVED KEYWORDS (Cannot be used as identifiers)
// ------------------------------------------------------------

// Current keywords
// let break = 1; case = 1; catch = 1; class = 1; const = 1;
// let continue = 1; debugger = 1; default = 1; delete = 1; do = 1;
// let else = 1; export = 1; extends = 1; finally = 1; for = 1;
// let function = 1; if = 1; import = 1; in = 1; instanceof = 1;
// let new = 1; return = 1; super = 1; switch = 1; this = 1;
// let throw = 1; try = 1; typeof = 1; var = 1; void = 1;
// let while = 1; with = 1; yield = 1;

// Strict mode reserved words
// let implements = 1; interface = 1; let = 1; package = 1;
// let private = 1; protected = 1; public = 1; static = 1;

// Future reserved words
// let enum = 1;

// Contextually reserved (in modules/strict mode)
// let await = 1;


// ------------------------------------------------------------
// 4. SPECIAL VALUES (Valid to assign, bad practice to declare)
// ------------------------------------------------------------

let trueValue = true;       // 'true' is a literal, not valid as variable name
let falseValue = false;     // 'false' is a literal
let nullValue = null;       // 'null' is a literal
let undefinedValue = undefined;  // 'undefined' is a global property
let notANumber = NaN;       // 'NaN' is a global property
let infinite = Infinity;    // 'Infinity' is a global property


// ------------------------------------------------------------
// 5. NAMING CONVENTIONS IN PRACTICE
// ------------------------------------------------------------

// camelCase - variables and functions
let userName = "John";
let userAge = 25;
function getUserData() {
    return { userName, userAge };
}

// PascalCase - classes and constructors
class UserProfile {
    constructor(name) {
        this.name = name;
    }
}

// UPPER_SNAKE_CASE - constants
const MAX_USERS = 100;
const API_BASE_URL = "https://api.example.com";
const PI = 3.14159;

// _leadingUnderscore - private/internal (convention)
class BankAccount {
    constructor(balance) {
        this._balance = balance;  // intended private
    }
    _calculateInterest() {        // intended private method
        return this._balance * 0.05;
    }
}

// $leadingDollar - DOM elements or special objects
let $button = document.getElementById("submit");
let $container = document.querySelector(".container");


// ------------------------------------------------------------
// 6. CASE SENSITIVITY DEMONSTRATION
// ------------------------------------------------------------

let item = "lowercase";
let Item = "uppercase first";
let ITEM = "all uppercase";

// console.log(item);   // "lowercase"
// console.log(Item);   // "uppercase first"
// console.log(ITEM);   // "all uppercase"


// ------------------------------------------------------------
// 7. UNICODE AND ESCAPE EXAMPLES
// ------------------------------------------------------------

let π = 3.14159;           // π (pi symbol)
let € = "Euro sign";       // €
let © = "Copyright";       // ©

console.log("All identifier examples loaded successfully!");
