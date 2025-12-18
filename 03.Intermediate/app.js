/* ------------------------------------------------------------------
   Intermediate JavaScript (ES6+)
   Topics: Template Literals, Arrow Functions, Destructuring, Spread/Rest
   ------------------------------------------------------------------
*/

// --- 1. Template Literals (Backticks) ---
console.log("\n--- Template Literals ---");

const firstName = "Brad";
const lastName = "Pitt";

// Old way: "Hello " + name
// New way: `Hello ${name}`
// Supports multi-line strings automatically
const bio = `
    Name: ${firstName} ${lastName}
    Occupation: Actor
    Status: Legend
`;
console.log(bio);


// --- 2. Arrow Functions ---
console.log("\n--- Arrow Functions ---");

// Standard Function
// function double(n) { return n * 2; }

// Arrow Function (Implicit Return)
// If it's one line, you don't need 'return' or curly braces {}
const double = n => n * 2;
console.log(`Double of 563: ${double(563)}`);

// Arrow Function returning an Object (Wrap in parentheses)
const createPerson = (name, height) => ({ name, height });
const person1 = createPerson('Neelay', 5.9);
console.log(person1);

// Methods inside Objects (Enhanced Object Literal)
const library = {
    sum: (a, b) => a + b,
    mult: (a, b) => a * b
};
console.log(`Sum: ${library.sum(2, 3)}`);


// --- 3. Default Parameters ---
console.log("\n--- Default Parameters ---");

// If 'b' is not passed, it defaults to 1
const multiply = (a, b = 1) => a * b;

console.log(multiply(5, 6)); // 30
console.log(multiply(5));    // 5 (5 * 1)


// --- 4. Spread Operator (...) ---
// "Spreads" the contents of an array or object into a new one.
console.log("\n--- Spread Operator ---");

// Arrays
const numbers = [1, 2, 3];
const moreNumbers = [4, 5];
const combined = [...numbers, ...moreNumbers]; // [1, 2, 3, 4, 5]
console.log(combined);

// Objects (Cloning & Merging)
const userBase = { name: "Jen", age: 22 };
const userProfile = { ...userBase, gender: "Female", country: "USA" };
console.log(userProfile);


// --- 5. Rest Operator (...) ---
// "Gathers" leftover arguments into an array.
console.log("\n--- Rest Operator ---");

function processUser(name, ...details) {
    console.log(`User: ${name}`);
    console.log(`Details Array:`, details);
}

processUser("Neelay", "Developer", "Gamer", "Student"); 
// Details will be: ["Developer", "Gamer", "Student"]


// --- 6. Destructuring (Unpacking) ---
console.log("\n--- Destructuring ---");

// Array Destructuring
const colors = ["red", "green", "blue", "yellow"];
const [primary, secondary, ...others] = colors;

console.log(`Primary: ${primary}`); // red
console.log(`Others: ${others}`);   // blue,yellow

// Object Destructuring (The most common pattern in React)
const settings = {
    theme: "Dark Mode",
    fontSize: 14,
    isAdmin: true
};

// Renaming variables during extraction: theme -> uiStyle
const { theme: uiStyle, fontSize, isAdmin } = settings;
console.log(`Style: ${uiStyle}, Size: ${fontSize}`);

// Nested Destructuring (Function Parameters)
const menuOptions = {
    title: "Main Menu",
    items: ["Home", "Settings"]
};

// We extract 'title' and 'items' directly in the function arguments
function printMenu({ title, items }) {
    console.log(`Menu: ${title}`);
    console.log(`First Item: ${items[0]}`);
}
printMenu(menuOptions);


// --- 7. Ternary Operator ---
// Short version of If/Else
console.log("\n--- Ternary Operator ---");

const wallet = 500;
const price = 600;

// Condition ? True : False
const canBuy = wallet >= price ? "Purchase Successful" : "Insufficient Funds";
console.log(canBuy);


// --- 8. Modern Loops ---
console.log("\n--- Modern Loops ---");

// For...Of (Best for Arrays)
const people = ["Alice", "Bob", "Charlie"];
for (const person of people) {
    console.log(`Person: ${person}`);
}

// For...In (Best for Object Keys)
const gameStats = { level: 5, score: 1000, rank: "Gold" };
for (const key in gameStats) {
    console.log(`${key}: ${gameStats[key]}`);
}