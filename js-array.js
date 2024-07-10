// Array operations
let numbers = [1, 2, 3, 4];

// Accessing an element by index
console.log(numbers[2]);
// Output: 3

// Modifying an element by index
numbers[1] = 10; // Changes the second element to 10

// Adding elements to the end of the array
numbers.push(6, 7); // Adds 6 and 7 to the end of the array
console.log(numbers);
// Output: [1, 10, 3, 4, 6, 7]

// Removing the last element of the array
numbers.pop(); // Removes the last element (7) from the array
console.log(numbers);
// Output: [1, 10, 3, 4, 6]

// Iterating over the array and logging each element
numbers.forEach(number => console.log(number));
// Output: 
// 1
// 10
// 3
// 4
// 6

// Filtering the array to create a new array of even numbers
let evenNumbers = numbers.filter(number => number % 2 === 0); // Filters out odd numbers
console.log(evenNumbers);
// Output: [10, 4, 6]

console.log(numbers);
// Output: [1, 10, 3, 4, 6] (original array remains unchanged)

// Mapping the array to create a new array of doubled numbers
let doubleNumbers = numbers.map(number => number * 2); // Multiplies each element by 2
console.log(doubleNumbers);
// Output: [2, 20, 6, 8, 12]


// Array of names
const names = ["John", "Negar", "Alice"];
console.log(names.sort());
// Output: [ 'Alice', 'John', 'Negar' ]

// Array of points
const points = [100, 23, 56, 2, 90];
console.log(points.sort());
// Output: [ 100, 2, 23, 56, 90 ] (incorrect numerical order because it sorts as strings)

console.log(points.sort((a, b) => a - b));
// Output: [ 2, 23, 56, 90, 100 ] (correct ascending numerical order)

console.log(points.sort((a, b) => b - a));
// Output: [ 100, 90, 56, 23, 2 ] (correct descending numerical order)
