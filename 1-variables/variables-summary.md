# Variables in JavaScript

Variables in JavaScript are like labeled containers that store different types of data. They serve as placeholders for values and play a fundamental role in programming. Here's a quick overview:

- **<span style="color:green">Declaration:</span>** To create a variable, we declare it using one of the following keywords `let`, `const`. Not `var`! For example:

  - `let age = 25;` (Creating a variable named `age` and assigning it the value `25`.)
  - `const name = "John";` (Creating a constant variable named `name` with the value `"John"`.)

- **<span style="color:orange">Types:</span>** Variables can hold various types of data, including numbers, strings, booleans, objects, and more.

- **<span style="color:green">Assignment:</span>** We assign values to variables using the assignment operator `=`. For example:

  - `let count = 10;` (Assigning the value `10` to the `count` variable. - initialise variable-)

- **<span style="color:orange">Mutability:</span>** Variables can be mutable (changeable) or immutable (constant). `let` and `var` variables can be changed, while `const` variables cannot be reassigned once set.

- **<span style="color:green">Scope:</span>** Variables have different scopes, affecting where they can be accessed. Block-scoped variables are defined within a specific code block, while function-scoped variables are defined within a function.

- **<span style="color:orange">Naming:</span>** Choosing meaningful and descriptive names for variables is essential for code readability and maintenance.

# Restrictions of Variable Names in JavaScript

JavaScript imposes specific rules and restrictions on variable names:

1. **Must Start with a Letter, Underscore, or Dollar Sign:**

   - Example: `let myVar = 42;` (Valid)
   - Example: `let _privateVar = "secret";` (Valid)
   - Example: `let $price = 19.99;` (Valid)
   - Example: `let 123var = "invalid";` (Invalid - starts with a digit)

2. **Can Contain Letters, Digits, Underscores, or Dollar Signs:**

   - Example: `let userAge = 30;` (Valid)
   - Example: `let item_1 = "apple";` (Valid)
   - Example: `let my$variable = "special";` (Valid)
   - Example: `let name-with-hyphen = "invalid";` (Invalid - contains hyphen)

3. **Are Case-Sensitive:**

   - Example: `let myVar = "lowercase";`
   - Example: `let myvar = "uppercase";`
   - These are considered different variables.

4. **Cannot Be Reserved Keywords:**

   - Example: `let if = true;` (Invalid - 'if' is a reserved keyword)
   - Example: `let while = 5;` (Invalid - 'while' is a reserved keyword)

5. **Cannot Contain Spaces or Special Characters (Except Underscore and Dollar Sign):**

   - Example: `let userName = "John";` (Valid)
   - Example: `let user name = "Alice";` (Invalid - contains space)
   - Example: `let user@domain = "invalid";` (Invalid - contains '@')

6. **Best Practices:**
   - Example: `let numberOfApples = 10;` (Descriptive and meaningful)
   - Example: `let a = "M20 7RZ";` (Not as descriptive, should be avoided)
