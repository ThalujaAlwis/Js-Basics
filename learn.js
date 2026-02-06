// 1. Variable sets
let name = "Thaluja";
const age = 22;
var isStudent = true;

// 2. Output
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// 3. Data types
let score = 85;              // Number
let grade = "A";             // String
let passed = true;           // Boolean
let marks = [80, 85, 90];    // Array
let student = {              // Object
    name: name,
    age: age
};

// 4. Condition (if-else)
if (score >= 50) {
    console.log("Status: Passed");
} else {
    console.log("Status: Failed");
}

// 5. Loop (for)
console.log("Marks:");
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

// 6. Function
function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

let average = calculateAverage(marks);
console.log("Average Marks:", average);

// 7. Arrow Function
const greet = (name) => {
    return "Hello " + name;
};
console.log(greet(name));

// 8. While loop
let count = 1;
while (count <= 3) {
    console.log("Count:", count);
    count++;
}

// 9. Ternary Operator
let result = age >= 18 ? "Adult" : "Minor";
console.log("Category:", result);

// 10. Basic user interaction (Browser)
alert("Welcome to JavaScript Basics");




