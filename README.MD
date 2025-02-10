# JavaScript Asynchronous Programming Examples

This project demonstrates different approaches to handling asynchronous operations in JavaScript, including Promises, async/await, and error handling.

## Project Structure

```
├── src/
│   ├── promises.js        # Promise-based API request example
│   ├── async-await.js     # Same functionality using async/await
│   └── try-catch.js       # Error handling with multiple API requests
├── package.json
└── README.md
```

## Features

- Fetching data from REST APIs
- Processing JSON responses
- Error handling
- Multiple request attempts with fallback
- Different approaches to async programming

## Examples

### 1. Promise-based Approach (promises.js)
Demonstrates chaining `.then()` methods to handle API requests and data processing.

```javascript
fetchUserData()
    .then(processedData => {
        // Process data
    })
    .catch(error => {
        // Handle errors
    });
```

### 2. Async/Await Approach (async-await.js)
Shows how to handle the same operations using async/await syntax for better readability.

```javascript
async function main() {
    try {
        const processedData = await fetchUserData();
        // Process data
    } catch (error) {
        // Handle errors
    }
}
```

### 3. Advanced Error Handling (try-catch.js)
Implements a fallback mechanism when the primary API request fails.

```javascript
try {
    // Attempt primary request
} catch {
    // Attempt fallback request
}
```

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Usage

Run each example individually using Node.js:

```bash
node src/promises.js
node src/async-await.js
node src/try-catch.js
```

## Dependencies

- node-fetch: For making HTTP requests
- Other dev dependencies for linting and code quality

## Prerequisites

- Node.js v23.3.0 or higher
- npm (Node Package Manager)

## Notes

This project is for educational purposes and demonstrates different approaches to handling asynchronous operations in JavaScript. Each file shows a different aspect of async programming and error handling.