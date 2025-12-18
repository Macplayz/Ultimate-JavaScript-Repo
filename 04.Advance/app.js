/* ------------------------------------------------------------------
   Advanced JavaScript
   Topics: High Order Array Methods, Map, Set, and Symbols
   ------------------------------------------------------------------
*/

// --- 1. forEach (Iteration) ---
// Just loops through data. Does NOT return a new array.
console.log("\n--- forEach ---");

const colors = ["teal", "orange", "blue"];
colors.forEach(color => console.log(`Color: ${color}`));

// Practical Use: Calculating Sum
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

// ✅ FIXED: Added 'const' to adder function to prevent global leak
const addToSum = (num) => sum += num;
numbers.forEach(addToSum);
console.log(`Total Sum: ${sum}`);


// --- 2. Map (Transformation) ---
// Creates a NEW array by modifying every item.
console.log("\n--- Map ---");

const rawNumbers = [12, 69, 45, 56, 45];
const scaledNumbers = rawNumbers.map(num => num * 10);

console.log(scaledNumbers); // [120, 690, 450...]


// --- 3. Filter (Selection) ---
// Creates a NEW array with items that pass a test.
console.log("\n--- Filter ---");

const scores = [1, 2, 3, 4, 5, 6];
const passingScores = scores.filter(score => score > 2);
console.log(passingScores);

// Filtering Objects (Real-world example)
const computers = [
    { ram: 4, hdd: 100 },
    { ram: 8, hdd: 200 }, // Only this one passes > 4
];

const powerfulComputers = computers.filter(pc => pc.ram > 4);
console.log(powerfulComputers);

// Filtering Strings
const words = ["spray", "limit", "elite", "destruction", "present"];
const longWords = words.filter(word => word.length > 6);
console.log(longWords);


// --- 4. Find (Search) ---
// Returns the FIRST item that matches.
console.log("\n--- Find ---");

const people = [
    { name: "Sam", age: 56 },
    { name: "Jimmy", age: 23 },
    { name: "Jimmy", age: 40 }, // This will be ignored
];

const jimmy = people.find(person => person.name === 'Jimmy');
console.log(jimmy); // { name: "Jimmy", age: 23 }

const ages = [3, 10, 18, 20];
const firstAdult = ages.find(age => age >= 18);
console.log(`First Adult Age found: ${firstAdult}`);


// --- 5. Every & Some (Validation) ---
console.log("\n--- Every & Some ---");

const userNames = ['qaz', 'jash', 'ssd'];

// every(): Do ALL items pass the test?
const allShort = userNames.every(name => name.length < 5);
console.log(`Are all names short? ${allShort}`); // true

// some(): Does AT LEAST ONE item pass?
const hasJash = userNames.some(name => name === 'jash');
console.log(`Is Jash in the list? ${hasJash}`); // true


// --- 6. Reduce (The Powerhouse) ---
// Squash an array into a single value (Number, Object, etc.)
console.log("\n--- Reduce ---");

const products = [
    { name: "Checkers", price: 10 },
    { name: "Harry Potter", price: 20 },
    { name: "iPhone", price: 1000 },
];


const totalPrice = products.reduce((accumulator, product) => {
    return accumulator + product.price;
}, 0); // Start at 0

console.log(`Total Cart Value: $${totalPrice}`);


// --- 7. Map (Key-Value Data Structure) ---
// Better than Objects for frequent additions/removals
console.log("\n--- Map (Data Structure) ---");

const userRoles = new Map();

userRoles.set('admin', 1);
userRoles.set('editor', 2);
userRoles.set('viewer', 3);

console.log(`Size of Map: ${userRoles.size}`);
console.log(userRoles.get('admin')); // 1

userRoles.delete('editor');
console.log(userRoles); // Editor is gone


// --- 8. Set (Unique Values) ---
// Automatically removes duplicates.
console.log("\n--- Set ---");

const uniqueNames = new Set();

uniqueNames.add("Apple");
uniqueNames.add("Orange");
uniqueNames.add("Apple"); // Duplicate ignored!

console.log(`Has Apple? ${uniqueNames.has('Apple')}`);

// Iterating over a Set
for (let item of uniqueNames) {
    console.log(item);
}


// --- 9. Symbol (Unique Identifiers) ---
// Used to create hidden properties in objects
console.log("\n--- Symbol ---");

const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log(sym1 === sym2); // false (Symbols are always unique!)

const hiddenObj = {};
hiddenObj[sym1] = "Secret Value";
console.log(hiddenObj[sym1]);