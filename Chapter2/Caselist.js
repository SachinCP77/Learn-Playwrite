// ============================================================
// JAVASCRIPT NAMING CASES - Complete Examples
// ============================================================

// ------------------------------------------------------------
// 1. camelCase
//    First word lowercase, each subsequent word capitalized.
//    Usage: variables, functions, methods
// ------------------------------------------------------------

let userName = "Alice";
let totalScore = 95;
let isUserActive = true;

function getUserById(id) {
    return { id: id, name: userName };
}

function calculateTotalPrice(price, tax) {
    return price + tax;
}


// ------------------------------------------------------------
// 2. PascalCase
//    Every word starts with a capital letter.
//    Usage: classes, constructors, React components, TypeScript interfaces/types
// ------------------------------------------------------------

class UserProfile {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
}

function PersonDetails(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}


// ------------------------------------------------------------
// 3. snake_case
//    All lowercase, words separated by underscores.
//    Usage: sometimes in object keys, file names, Python-style in JS
// ------------------------------------------------------------

let user_name = "Bob";
let total_score = 88;
let is_user_active = false;

function get_user_by_id(id) {
    return { id: id, name: user_name };
}

const config = {
    api_base_url: "https://api.example.com",
    max_login_attempts: 5,
    enable_feature_x: true
};


// ------------------------------------------------------------
// 4. SCREAMING_SNAKE_CASE (CONSTANT_CASE)
//    All uppercase, words separated by underscores.
//    Usage: constants, environment variables, configuration flags
// ------------------------------------------------------------

const MAX_USERS = 100;
const API_BASE_URL = "https://api.example.com";
const DEFAULT_TIMEOUT = 3000;
const PI = 3.14159;
const FEATURE_FLAG_ENABLE_V2 = true;


// ------------------------------------------------------------
// 5. kebab-case
//    All lowercase, words separated by hyphens.
//    Note: NOT valid for JS variables/functions because '-' is the minus operator.
//    Usage: HTML attributes, CSS class names, file names, URLs
// ------------------------------------------------------------

// Valid in strings / HTML / CSS:
let htmlAttribute = "data-user-id";       // HTML: <div data-user-id="123">
let cssClassName = "main-container";      // CSS: .main-container { }
let fileName = "my-script-file.js";       // File name
let routePath = "/user-profile/settings"; // URL path

// Invalid in JS (uncomment to see SyntaxError):
// let my-variable = 10;  // ERROR
// function get-user() {} // ERROR


// ------------------------------------------------------------
// 6. Train-Case (HTTP-Header-Case)
//    Capitalized words separated by hyphens.
//    Usage: HTTP headers, some configuration keys
// ------------------------------------------------------------

let contentTypeHeader = "Content-Type";
let acceptEncodingHeader = "Accept-Encoding";
let xCustomHeader = "X-Custom-Header";

const headers = {
    "Content-Type": "application/json",
    "Accept-Language": "en-US",
    "X-Request-ID": "abc-123"
};


// ------------------------------------------------------------
// 7. flatcase / lowercase
//    All lowercase, no separators.
//    Usage: rare in JS, sometimes in package names or single-word variables
// ------------------------------------------------------------

let username = "charlie";
let totalscore = 75;
let isuseractive = true;


// ------------------------------------------------------------
// 8. UPPERCASE / UPPERFLATCASE
//    All uppercase, no separators.
//    Usage: rare, sometimes abbreviations or environment variables
// ------------------------------------------------------------

const ENV = "production";
const DBHOST = "localhost";
const APIKEY = "sk-123456789";


// ------------------------------------------------------------
// 9. _leadingUnderscore (private/internal convention)
//    Starts with underscore, usually combined with camelCase.
//    Usage: private/internal properties and methods (convention only)
// ------------------------------------------------------------

class BankAccount {
    constructor(balance) {
        this._balance = balance;          // intended private
        this._accountHolder = "Unknown";  // intended private
    }

    _calculateInterest() {                // intended private method
        return this._balance * 0.05;
    }

    getBalance() {
        return this._balance;
    }
}


// ------------------------------------------------------------
// 10. $leadingDollar (special object convention)
//     Starts with dollar sign, usually combined with camelCase.
//     Usage: DOM elements, jQuery objects, special variables
// ------------------------------------------------------------

let $button = "DOM submit button";
let $container = "DOM container element";
let $userList = "jQuery object for user list";


// ------------------------------------------------------------
// SUMMARY TABLE
// ------------------------------------------------------------
/*
| Case                 | Example              | Common JS Usage                     |
|----------------------|----------------------|-------------------------------------|
| camelCase            | getUserById          | Variables, functions, methods       |
| PascalCase           | UserProfile          | Classes, constructors, components   |
| snake_case           | get_user_by_id       | Object keys, file names (sometimes) |
| SCREAMING_SNAKE_CASE | API_BASE_URL         | Constants, env variables            |
| kebab-case           | get-user-by-id       | HTML attrs, CSS classes, file names |
| Train-Case           | Content-Type         | HTTP headers, config keys           |
| flatcase             | getuserbyid          | Rare, package names                 |
| UPPERCASE            | GETUSERBYID          | Rare, abbreviations                 |
| _leadingUnderscore   | _privateVar          | Private/internal (convention)       |
| $leadingDollar       | $element             | DOM/jQuery/special objects          |
*/

console.log("All case examples loaded successfully!");
