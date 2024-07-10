// Variable declarations
let age = 25;
let temperature = -18.5;

let name = "Alice";
let message = "Hello World";

// Variable reassignment and type coercion
let myVar = 10; // number
myVar = "10"; // string

let isRaining = true;

// Object declaration
let person = { id: 1, name: "Alice", isStudent: true };

// Array declaration
let numbers = [1, 2, 3, 4];

// Special values
let nullVar = null;
let description; // undefined

// Logging a message
console.log(message);

// Constant declaration
// const PI = 3.14;
// PI = 3.141; // This will cause an error

// console.log("PI", PI); // it doesn't work because we cannot change 'const'

// Base API URL constant
const BASED_API_URL = "http://localhost:8080/api/v1/";

// Modifying an object property
const student = { name: "John" };
student.name = "Thomas";

console.log(student.name);

// For loop to check even and odd numbers
for (let i = 1; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i, "is even");
    } else {
        console.log(i, "is odd");
    }
}

// For loop with ternary operator
for (let i = 1; i < 10; i++) {
    console.log(i % 2 === 0 ? i + " is even" : i + " is odd");
}

// Switch statement
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("It is the beginning of the week");
        break;
    case "Sunday":
        console.log("It is the end of the week");
        break;
    default:
        console.log("It is the middle of the week");
        break;
}

// Arithmetic operation and comparison
let a = 10;
let b = 10;
let c = a + b;
console.log(c);

let n1 = 10;
let n2 = "10";

let isEqual = n1 == n2; // true because == compares value only
let isEqualWithType = n1 === n2; // false because === compares value and type
console.log(isEqual, isEqualWithType);

// Function Declarations
function greet_0() {
    console.log("Hello Function Declaration_0");
}
greet_0();

function greet_1(name) {
    console.log("Hello " + name + "!");
}
greet_1("Function Declaration_1");

function addition(n1, n2) {
    return n1 + n2;
}
console.log(addition(10, 20));

// Function Expression
const greetExpression = function (name) {
    console.log("Hello " + name + "!");
};
greetExpression("Function Expression");

// Arrow Function
const greetArrow = (name) => {
    console.log("Hello " + name + "!");
};
greetArrow("Arrow Function");

const _addition = (n1, n2) => {
    return n1 + n2;
};
console.log(_addition(10, 30));

// Function using rest parameter and for...of loop
function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5));

// Function using rest parameter and forEach method
function sum_1(...numbers) {
    let total = 0;
    numbers.forEach((number) => (total += number));
    return total;
}
console.log(sum_1(1, 2, 3, 4));

// Variable declarations
let _name = "Alice";
let _age = 21;

// Concatenation using the + operator
let _message = "Hello, my name is " + _name + " and I am " + _age + " years old.";
console.log(_message);

// Template literal (backtick method) for more readable string interpolation
let templateMessage = `Hello, my name is ${_name} and I am ${_age} years old.`;
console.log(templateMessage);

// Template literal with expression evaluation
const g = 5;
const h = 10;
const theResult = `The sum of g and h is ${g + h}`;
console.log(theResult);

// Function with default parameters
function add(x = 0, y = 0) {
    return x + y;
}

// Function for subtraction
function subtraction(x, y) {
    return x - y;
}

// Function for multiplication
function multiply(x, y) {
    return x * y;
}

// Function for division with error handling
function divide(x, y) {
    if (y === 0) {
        throw new Error("Cannot divide by Zero");
    }
    return x / y;
}

// Higher-order function that takes another function as an argument
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

// Example usage of the calculate function with the subtraction operation
console.log(calculate(10, 21, subtraction));

try{
    console.log((calculate(10,0,divide)));
}catch (error){
    console.log("Caught an error: ", error.message);
}finally {
    console.log("Final block has been executed");
}

// String operations
let text = "Hello, World";
console.log(text.length); // Outputs the length of the string
console.log(text.toUpperCase()); // Converts the string to uppercase
console.log(text.indexOf("World")); // Finds the position of the substring "World"
console.log(text.slice(0, 5)); // Extracts a portion of the string from index 0 to 5

// Date operations
const currentDate = new Date(); // Creates a new Date object with the current date and time
console.log(currentDate); // Outputs the current date and time
console.log(currentDate.getFullYear()); // Outputs the current year
console.log(currentDate.getMonth() + 1); // Outputs the current month (0-11, so +1 for a 1-12 range)
console.log(currentDate.getSeconds()); // Outputs the current seconds

// Outputs the date in Swedish locale format (YYYY-MM-DD)
console.log(currentDate.toLocaleDateString("sv-SE")); 

// Outputs the date in the default locale format
console.log(currentDate.toLocaleDateString()); 
