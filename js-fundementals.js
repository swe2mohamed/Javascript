let age = 25;
let temprature = -18.5;

let name = "Alice";
let message = "Hello World";

let myVar = 10; // number
myVar = "10"; // string

let isRaining = true;

let person = { id: 1, name: "ALice", isStudent: true };

// array
let numbers = [1, 2, 3, 4];

let nullVar = null;
let descreiption; // undefined

console.log(message);

//const PI = 3.14;
//PI = 3.141;

// console.log("PI", PI); // it do work becuse we can not change the 'const'

const BASED_API_URL = "HTTP://localhost:8080/api/v1/";

const student = { name: "John" };

student.name = "Thomas";

console.log(student.name);

// for loop
for (let i = 1; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(i, " is" + " even");
  } else {
    console.log(i, " is", " odd");
  }
}

for (let i = 1; i < 10; i++) {
  console.log(i % 2 == 0 ? i + " is even" : i + " is odd");
}

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It is beginning of the week");
    break;
  case "Sunday":
    console.log("It is the end of the week");
    break;
  default:
    console.log("It is the middle of the week");
    break;
}

// operator
let a = 10;
let b = 10;
let c = a + b;
console.log("-");

let n1 = 10;
let n2 = "10";

let isEqual = n1 == n2; // it is true becuse == "= = " compare a value
let isEqualWithType = n1 === n2; // it is false becuse === " = = =" is compare value and data type.
console.log("-");

// Functions
// 1. Function Declaration

function great_0() {
  console.log("Hello Function Declaration_0");
}
great_0();

function great_1(name) {
  console.log("Hello " + name + " !");
}
great_1("Function Declaration_1");

function addition(n1, n2) {
  return n1 + n2;
}

console.log(addition(10, 20));

//2. Function Expression

const greatExpression = function (name) {
  console.log("Hello " + name + " !");
};
greatExpression("Function Expression");

// 3. Arrow Funciton
const greetArrow = (name) => {
  console.log("Hello " + name + " !");
};
greetArrow("Arrow Function");


const _addition = (n1, n2) => {
    const result = n1 + n2;
    return result;
};
console.log(_addition(10,30));