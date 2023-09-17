# JavaScript Data Types

JavaScript has two main categories of data types: **primitive types** and **reference types**.

## Primitive Types

- **<span style="color:green">Number:</span>** Represents both integer and floating-point numbers. Example: `let num = 42;`
- **<span style="color:green">String:</span>** Represents sequences of characters. Example: `let greeting = "Hello, world!";`
- **<span style="color:green">Boolean:</span>** Represents true or false values. Example: `let isTrue = true;`
- **<span style="color:green">Undefined:</span>** Represents a variable that has been declared but has no assigned value. Example: `let x;`
- **<span style="color:green">Null:</span>** Represents the absence of any object value. Example: `let empty = null;`
- **Symbol (ES6):** Represents a unique and immutable value, often used as object property keys. Example: `const sym = Symbol('description');`
- **BigInt (ES11):** Represents large integers beyond the limits of the Number data type. Example: `const bigIntNum = 1234567890123456789012345678901234567890n;`

## Reference Types

- **<span style="color:orange">Object:</span>** Represents a collection of key-value pairs, also known as properties and methods. Example: `let person = { name: "Alice", age: 30 };`
- **<span style="color:orange">Array:</span>** A special type of object that holds an ordered list of values. Example: `let numbers = [1, 2, 3, 4, 5];`
- **<span style="color:orange">Function:</span>** A type that represents a JavaScript function. Functions are also objects. Example: `function greet(name) { return "Hello, " + name; }`
- **Date:** Represents dates and times. Example: `let today = new Date();`
- **RegExp:** Represents regular expressions for pattern matching. Example: `let regex = /pattern/;`
- **Map (ES6):** Represents a collection of key-value pairs where keys can be of any data type. Example: `let map = new Map();`
- **Set (ES6):** Represents a collection of unique values. Example: `let set = new Set();`
- **Promise (ES6):** Represents a value that might be available now, in the future, or never. Used for asynchronous operations. Example: `let promise = fetch('https://example.com');`

Understanding these data types is crucial when working with JavaScript, as it affects how data is stored and manipulated in your programs.
