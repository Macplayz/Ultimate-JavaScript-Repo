/* ------------------------------------------------------------------
   JavaScript Fundamentals
   Topics: Console, Variables, Data Types, Operators, and Strings
   ------------------------------------------------------------------
*/

// --- Console Methods ---
console.log('Hello World');
console.warn('This is a warning - stop right there!');
console.error('This is an error message!');
console.table({ name: 'Neelay', age: 21 }); // Clean way to view Objects

console.clear();
console.log('Console cleared. Starting fresh...');

// --- Variables (let vs const) ---
// Rule: Use 'const' by default. Only use 'let' if the value changes.
const PI = 3.14; 
console.log(PI);

let currentNum = 10; // 'let' because this might change later
console.log(typeof currentNum);

// --- naming conventions (CamelCase) ---
const myName = "Neelay";
const careerGoal = "Programmer";
const twitterHandle = "@neelay_99";
const gender = "Male";

console.log(`User: ${myName}, Goal: ${careerGoal}, Handle: ${twitterHandle}`);

// --- Primitive Data Types ---
const favNumber = 69;
let notDefined; // Undefined by default
const isJsHard = false;
const isJsCool = true;

// ⚠️ The "NaN" Trap
// Adding a number to 'undefined' results in NaN (Not a Number)
console.log(favNumber + undefined); 

// --- Arithmetic Operators ---
const a = 69;
const b = 10;

console.log(a + b);  // Addition
console.log(a % b);  // Modulo (Remainder)
console.log(a ** b); // Exponentiation (Power)

// --- Comparison Operators ---

// 1. Strict Equality (===)
// Checks if Value AND Type are the same.
console.log(10 === '10'); // false (Number vs String)

// 2. Loose Equality (==)
// Checks Value only (Avoid using this if possible).
console.log(10 == '10');  // true

// 3. Strict Inequality (!==) -> THE FIX
// You previously wrote "===!", which is a syntax error.
// The correct way to ask "Is 10 strictly NOT equal to '10'?" is:
console.log(10 !== '10'); // true (Because a Number is not a String)

const x = 67;
const y = 64;

console.log(x > y);  // true
console.log(x <= y); // false

// --- Strings & Interpolation ---
const firstName = "John";
const lastName = "Doe";

// 1. Concatenation (Old Way)
// let fullName = firstName + " " + lastName;

// 2. Template Literals (Modern Way)
const fullName = `${firstName} ${lastName}`;
console.log(`My name is ${fullName}`);

// String Methods
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.includes('o')); // true
console.log(firstName.slice(0, 3));   // "Joh"

// --- Type Conversion (Fixing the logic) ---
let moneyString = "50.55";

console.log(typeof moneyString); // string

// 1. Convert to Number (Keeps decimals)
let amount = Number(moneyString); 
// OR: let amount = parseFloat(moneyString);

// 2. Convert to Integer (Removes decimals)
let wholeAmount = parseInt(moneyString); 

console.log(amount);      // 50.55
console.log(wholeAmount); // 50

// 3. Number to String
let val = 100;
let valString = val.toString();
console.log(typeof valString); // string

