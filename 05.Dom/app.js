/* ------------------------------------------------------------------
   DOM Manipulation Basics
   (Document Object Model) - The bridge between JS and HTML.
   ------------------------------------------------------------------
*/

// --- 1. DOM Inspection ---
console.log(document);
console.log("Title:", document.title);
console.log("URL:", document.documentURI);

// --- 2. Selecting Elements (The Big 5) ---
// Method 1: Get by ID
const mainHeading = document.getElementById("main-title");
console.log(mainHeading);

// Method 2: Get by Class Name (Returns Collection)
const items = document.getElementsByClassName("list-item");
console.log(items);

// Method 3: Get by Tag Name
const allParagraphs = document.getElementsByTagName("p");

// Method 4: Query Selector (Selects the FIRST match) - Most popular
const firstSection = document.querySelector(".section");

// Method 5: Query Selector All (Selects ALL matches)
const allButtons = document.querySelectorAll("button");


// --- 3. Manipulating Text & HTML ---
const p = document.querySelector(".para");

// innerText: Visible text only
if(p) console.log("innerText:", p.innerText); 

// textContent: All text including hidden formatting
if(p) console.log("textContent:", p.textContent);

// innerHTML: Renders HTML tags
// mainHeading.innerHTML = "<del>DOM Mastered</del>";


// --- 4. Style Manipulation ---
const targetDiv = document.querySelector(".text");

if(targetDiv) {
    targetDiv.style.color = "white";
    targetDiv.style.backgroundColor = "teal";
    targetDiv.style.padding = "20px";
    targetDiv.style.borderRadius = "10px";
    targetDiv.style.textAlign = "center";
}


// --- 5. Class Manipulation (classList) ---
// Useful for toggling dark mode or active states
const box = document.querySelector(".box");

if(box) {
    box.classList.add("highlight");    // Adds class
    box.classList.remove("hidden");    // Removes class
    box.classList.toggle("active");    // Switches on/off
}


// --- 6. Creating & Adding Elements ---
const ul = document.querySelector("ul");
if(ul) {
    const newLi = document.createElement("li");
    newLi.innerText = "I was created by JS!";
    newLi.classList.add("list-item");

    // Append (Add to end)
    ul.appendChild(newLi);
}


// --- 7. Event Listeners (The Interactive Part) ---

// Click Event
const btn = document.querySelector("#click-btn");

if(btn) {
    btn.addEventListener("click", () => {
        btn.style.backgroundColor = "red";
        btn.innerText = "Clicked!";
        console.log("Button was clicked");
    });
}

// Mouse Event
if(targetDiv) {
    targetDiv.addEventListener("mousemove", () => {
        targetDiv.innerText = "Mouse is moving here!";
    });
}

// Form Event (Prevent Default Refresh)
const form = document.querySelector("form");
const input = document.querySelector("input");

if(form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Stops page from reloading
        console.log("Form Submitted:", input.value);
    });
}