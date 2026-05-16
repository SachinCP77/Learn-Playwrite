# Learn JavaScript

This repository contains organized JavaScript examples and exercises for learning the language from the ground up.

## Repository Structure

```
.
├── Chapter1/                 # JavaScript Basics
│   ├── basics.js
│   └── 02bascis.js
├── Chapter2/                 # Identifiers, Variables & Naming Conventions
│   ├── Identifires.js        # Valid/invalid identifier rules and examples
│   ├── Varbles.js            # Variable declarations and usage
│   ├── Caselist.js           # Naming case conventions (camelCase, PascalCase, snake_case, etc.)
│   ├── let_host.js           # let hoisting and undefined behavior
│   └── let_hoist_block.js    # let block scoping and temporal dead zone
├── Chapter3/                 # Data Types, Literals & Strings
│   ├── 22_litreal.js         # Literals and typeof examples
│   ├── 23_null_undefined.js  # null vs undefined deep dive
│   ├── 27_Strings.js         # String declarations and quotes
│   └── 28_temp_litr.js       # Template literals and string interpolation
├── Chapter4/                 # Operators - Arithmetic, Assignment & Comparison
│   ├── 29_Arthmiteic.js      # Arithmetic operators (+, -, *, /, %)
│   ├── 30_IntQ.js            # Assignment and exponentiation operators
│   └── 31_Compari.js         # Comparison operators (<, >, >=, <=)
└── js-identifiers-examples.js # Standalone comprehensive identifier examples
```

## Topics Covered

### Chapter 1: Basics
- Introduction to JavaScript fundamentals

### Chapter 2: Identifiers & Naming
- **Identifiers**: Rules for valid JavaScript names (letters, digits, `_`, `$`, Unicode)
- **Variables**: Declaring and using variables
- **let Hoisting & Block Scoping**: Understanding temporal dead zone and block-level declarations
- **Naming Conventions**:
  - `camelCase` — variables, functions, methods
  - `PascalCase` — classes, constructors, components
  - `snake_case` — object keys, file names
  - `SCREAMING_SNAKE_CASE` — constants, environment variables
  - `kebab-case` — HTML attributes, CSS classes, URLs
  - `Train-Case` — HTTP headers
  - `_leadingUnderscore` — private/internal members (convention)
  - `$leadingDollar` — DOM elements / special objects

### Chapter 3: Data Types, Literals & Strings
- **Literals**: Primitive value representations and `typeof` checks
- **null vs undefined**:
  - `undefined` — automatically assigned when a variable is declared but not initialized
  - `null` — intentionally assigned to represent "no value" or "empty"
  - Equality checks (`==` vs `===`)
- **Strings**: Single quotes, double quotes, and best practices
- **Template Literals**: Backtick syntax, string interpolation with `${expression}`, multi-line strings

### Chapter 4: Operators
- **Arithmetic Operators**: Addition, subtraction, multiplication, division, and modulo (`+`, `-`, `*`, `/`, `%`)
- **Assignment & Exponentiation Operators**: `+=`, `-=`, `*=`, `/=`, and `**` (power operator)
- **Comparison Operators**: Less than, greater than, greater than or equal to, less than or equal to (`<`, `>`, `>=`, `<=`)

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/SachinCP77/Learn-Playwrite.git
   cd Learn-Playwrite
   ```

2. Run any example file with Node.js:
   ```bash
   node Chapter2/Caselist.js
   node Chapter2/let_host.js
   node Chapter3/23_null_undefined.js
   node Chapter3/28_temp_litr.js
   node Chapter4/29_Arthmiteic.js
   node Chapter4/30_IntQ.js
   node Chapter4/31_Compari.js
   node js-identifiers-examples.js
   ```

## Requirements

- [Node.js](https://nodejs.org/) (any recent LTS version)

## Author

- **SachinCP77**

## License

This project is for educational purposes.
