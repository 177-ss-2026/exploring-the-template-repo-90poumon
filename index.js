// Personal Information
const firstName = "Yao Benoit";
const lastName = "Makouhoui";
const age = 28; // Your actual age
const isStudent = true;

// Using template literals
const introduction = `Hello! My name is ${firstName} ${lastName}. I am ${age} years old.`;
const studentStatus = `Am I a student? ${isStudent}`;

// Print to console
console.log(introduction);
console.log(studentStatus);

// Add this to the bottom of index.js
const currentYear = 2026;
const birthYear = currentYear - age;
console.log(`I was born in ${birthYear}.`);
