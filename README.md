# Potential NullPointerException in Array Handling
This repository demonstrates a potential bug related to handling arrays in JavaScript and provides a solution.

## Bug Description
The original `printArray` function does not check if the input array is null or undefined.  If an empty or null array is passed, accessing `arr.length` will throw a runtime error.

## Solution
The improved version adds a null and undefined check before accessing array elements to prevent this error.

## How to Run
1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred code editor.
3. Execute the JavaScript files using a Node.js environment (e.g., `node bug.js` and `node bugSolution.js`).