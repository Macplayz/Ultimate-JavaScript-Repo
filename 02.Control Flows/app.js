/* ------------------------------------------------------------------
   Control Flow & Data Structures
   Topics: Conditionals, Loops, Arrays, Objects, Functions, and Scope
   ------------------------------------------------------------------
*/

// --- 1. Conditional Logic ---
console.log("\n--- Conditionals ---");

let age = 19;

if (age >= 18) {
    console.log("You are eligible to drive.");
} else {
    console.log("You cannot drive.");
}

// Password Validation (Refactored logic)
let password = "secure";

if (!password) {
    console.log("Please provide a password.");
} else if (password.length === 8) {
    console.log("Welcome!");
} else if (password.length < 8) {
    console.log("Password is too short.");
} else {
    console.log("Password is too long (must be exactly 8 characters).");
}

// --- 2. Switch Statements ---
console.log("\n--- Switch Statements ---");

const fruit = "banana";

switch (fruit) {
    case "banana":
        console.log("Banana is good!");
        break;
    case "orange":
        console.log("I am not a fan of orange.");
        break;
    case "apple":
        console.log("How do you like them apples?");
        break;
    default:
        console.log("Never heard of that fruit.");
}

// --- 3. Loops ---
console.log("\n--- Loops ---");


let sum = 0;
for (let i = 0; i < 5; i++) {
    sum += i;
    console.log(`Looping: ${i}`);
}
console.log(`Total Sum: ${sum}`);

// While Loop
let i = 1;
while (i <= 3) {
    console.log(`While Loop: ${i}`);
    i++;
}

// Do-While Loop (Runs at least once)
let k = 20;
do {
    console.log(`Do-While: ${k}`);
    k++;
} while (k <= 22);


// --- 4. Arrays (Lists) ---
console.log("\n--- Arrays ---");

const fruits = ["mango", "apple", "cherry"];
const numbers = [1, 2, 3, 4, 5];
const mixedArr = ["string", ["nested"], 123, true]; 

console.log(mixedArr[1][0]); // Accessing nested array: "nested"

// Array Methods
const array1 = [12, 3, 5, 6];
const array2 = [6, 7, 69];

// ✅ FIXED: Added 'const' to prevent global leak
const combinedArray = array1.concat(array2);
console.log("Combined:", combinedArray);

combinedArray.push("New Item");     // Add to end
combinedArray.unshift("First Item"); // Add to start
combinedArray.pop();                 // Remove from end
combinedArray.shift();               // Remove from start

console.log("Sorted:", combinedArray.sort()); // ⚠️ Sorts alphabetically by default!
console.log("Sliced:", combinedArray.slice(1, 4)); // Returns a copy of part of array

// --- 5. Objects ---
console.log("\n--- Objects ---");

const car = {
    type: "SUV",
    model: "GL Series",
    color: "Black",
};

// Updating properties
car.type = "Toyota";
car.wheels = "Sport"; // Adding new property
console.table(car);   // Nice table view

// Objects with Methods (Modern Syntax)
const person = {
    name: "John",
    age: 69,
    // Concise Method Definition
    greet() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
};

console.log(person.greet());


// --- 6. Functions & Callbacks ---
console.log("\n--- Functions ---");

// Function Declaration
function multiply(a, b) {
    return a * b;
}
const mathResult = multiply(10, 5);
console.log(`Math Result: ${mathResult}`);

// Callback Functions (Crucial for Event Listeners later)
function processUserData(userName, callback) {
    console.log(`Processing user: ${userName}...`);
    callback(); // Running the function passed as an argument
}

function done() {
    console.log("Finished processing!");
}

processUserData("Neelay", done);


// --- 7. Timers (Async) ---
console.log("\n--- Timers ---");

// setTimeout: Runs once after delay
setTimeout(() => {
    console.log("2 Seconds have passed (Timeout)");
}, 2000);

// setInterval: Runs repeatedly
const interval = setInterval(function(){
    console.log(`This is being executed every 2 seconds!!`);
},2000);
