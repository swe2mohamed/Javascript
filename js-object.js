// Object declaration with nested objects and methods
let person = {
    name: "John Doe",
    age: 30,
    isStudent: true,
    address: {
        city: "New York",
        country: "USA",
    },
    info: function () {
        console.log(this.name, "-", this.age);
    }
}

// Calling the info method
person.info(); 
// Output: John Doe - 30

// Accessing a nested object property
console.log(person.address.city); 
// Output: New York

// Modifying an object property
person.age = 24;
console.log(person.age); 
// Output: 24

// Modifying an object property using bracket notation
person["age"] = 32;
console.log(person.age); 
// Output: 32

// Adding a new property to the object
person.gender = "Male";
console.log(person); 
// Output: 
// {
//     name: "John Doe",
//     age: 32,
//     isStudent: true,
//     address: {
//         city: "New York",
//         country: "USA"
//     },
//     info: function () {
//         console.log(this.name, "-", this.age);
//     },
//     gender: "Male"
// }

// Deleting a property from the object
delete person.address;
console.log(person); 
// Output: 
// {
//     name: "John Doe",
//     age: 32,
//     isStudent: true,
//     info: function () {
//         console.log(this.name, "-", this.age);
//     },
//     gender: "Male"
// }
