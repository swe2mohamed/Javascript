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
let c = a+b;

let n1 = 10;
let n2 = "10";

let isEqual = n1 == n2; // it is true becuse == "= = " compare a value 
let isEqualWithType = n1 === n3; // it is false becuse === " = = =" is compare value and data type.
