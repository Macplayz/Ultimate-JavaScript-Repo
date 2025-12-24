# <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" height="40" width="40" align="top"/>  Ultimate JavaScript Repository

A comprehensive collection of JavaScript concepts, algorithms, and projects ranging from vanilla JS to backend logic. This repository includes examples of ES6+ syntax, DOM manipulation, data structures, and optimized algorithms.

## Repository Structure

The codebase is organized into five primary modules. Each module is contained in its own folder with dedicated HTML and JS files:

* **01.Basics/** - Core concepts including variables, data types, type conversion, and operators.
* **02.Control Flows/** - Logic flow control using conditionals, loops, switch statements, and basic error handling.
* **03.Intermediate/** - Modern ES6+ features, including arrow functions, destructuring, template literals, and the spread/rest operators.
* **04.Advance/** - High-order array methods (map, filter, reduce), advanced data structures (Map, Set), and symbols.
* **05.Dom/** - Document Object Model (DOM) manipulation, event listeners, and dynamic UI updates.

## Prerequisites

To run these files, you need one of the following:
* A modern web browser (Chrome, Firefox, Edge, or Safari).
* **Node.js** installed on your machine (optional, for terminal execution).

## How to Run the Code

There are two ways to execute the scripts in this repository.

### Method 1: Browser Console (Recommended for Visualization)
This method allows you to see the output immediately without installing software.

1.  Download the repository to your local machine.
2.  Navigate to the folder of the module you want to study (e.g., `01.Basics` or `05.Dom`).
3.  Open the `app.html` file inside that folder in any web browser.
4.  Once the page loads, **Right-Click** anywhere on the page and select **Inspect**.
5.  Navigate to the **Console** tab in the developer tools panel.
6.  The output of the JavaScript file (`app.js`) will be displayed there.

### Method 2: Node.js (Terminal)
If you prefer working in a command-line environment:

1.  Open your terminal or command prompt.
2.  Navigate to the root directory of the repository.
3.  Run the specific file using the node command. For example:
    ```bash
    node "01.Basics/app.js"
    ```
    *Note: Use quotes around the path if the folder name contains spaces (e.g., "02.Control Flows/app.js").*

## Documentation & Notes

### Understanding the Output
* **Console Logs:** Most files use `console.log()` to print values. Ensure your browser console filter is set to "All levels" or "Info".
* **Strict Mode:** All code is written assuming modern strict standards. Global variable leaks are prevented using `const` and `let`.

### Code Style
* **Naming Conventions:** Variables use `camelCase`. Constants use `UPPER_SNAKE_CASE`.
* **Type Safety:** While this is vanilla JavaScript, the logic follows strong typing principles (e.g., using `===` instead of `==`) to minimize bugs.

## External Resources

For further reading and official documentation on the concepts used in this repository, refer to the following:

* **MDN Web Docs (Mozilla):** The industry standard for JavaScript documentation.
    * [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* **W3Schools JavaScript Tutorial:** A useful resource for quick syntax references and examples.
    * [https://www.w3schools.com/js/](https://www.w3schools.com/js/)
* **The Modern JavaScript Tutorial:** A detailed guide covering everything from basics to advanced topics.
    * [https://javascript.info/](https://javascript.info/)

## Future Roadmap

This repository is actively maintained. The following modules are currently in development and will be updated soon:

* **06_Async_Concepts:** Understanding Promises, Async/Await, and the Event Loop.
