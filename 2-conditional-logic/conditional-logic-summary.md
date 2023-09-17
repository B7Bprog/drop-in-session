# JavaScript Basics

## Conditional Logic

Conditional logic is a fundamental part of JavaScript that allows you to make decisions and execute code based on certain conditions. JavaScript provides several ways to implement conditional statements:

### The "if" Statement

The `if` statement is used to execute a block of code if a specified condition is true.

```javascript
if (condition) {
  // Code to execute if the condition is true
}
```

### The "else if" Statement

The `else if` statement allows you to check multiple conditions sequentially.

```javascript
if (condition1) {
  // Code to execute if condition1 is true
} else if (condition2) {
  // Code to execute if condition2 is true
} else {
  // Code to execute if none of the conditions are true
}
```

### The "else" Statement

```javascript
if (condition) {
  // Code to execute if the condition is true
} else {
  // Code to execute if the condition is false
}
```

### The "Ternary" Operator

The ternary operator (`?`) is a concise way to write conditional statements.

```javascript
const result = condition ? trueValue : falseValue;
```

The `result` variable is assigned `trueValue` if `condition` is true, otherwise, it is assigned `falseValue`.

### Truthy and Falsy Values

In JavaScript, certain values are considered truthy, which means they evaluate to true in conditional statements. Some examples of truthy values include:

- `"string of any length"`
- `" "` (including spaces)
- `123` (any positive number)
- `-123` (any negative number)
- `[]` (empty arrays)
- `{}` (empty objects)

Conversely, there are values in JavaScript that are considered falsy, meaning they evaluate to false in conditional statements. Some examples of falsy values include:

- `""` (empty strings)
- `0`
- `undefined`
- `null`
- `NaN`
