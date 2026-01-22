//array-operations simple

// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28

const temperatures = [32, 35, 28, 40, 38, 30, 42];

const above35 = temperatures.filter(temp => temp > 35);
console.log("Above 35:", above35);

const fahrenheit = temperatures.map(temp => (temp * 9/5) + 32);
console.log("Fahrenheit:", fahrenheit);

const average = temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;
console.log("Average:", average);

const firstAbove40 = temperatures.find(temp => temp > 40);
console.log("First above 40:", firstAbove40);

const indexOf28 = temperatures.findIndex(temp => temp === 28);
console.log("Index of 28:", indexOf28);


// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
// const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//     5. findIndex() of "node"

let courses = ["javascript", "react", "node", "mongodb", "express"];

let lenGt5 = courses.filter(s => s.length > 5)
console.log("Length greater than 5: ",lenGt5)

let upper = courses.flatMap(s => s.toUpperCase())
console.log("Upper Case: ",upper)

let reduced = courses.reduce((acc,s) => acc + s)
console.log("Concatenate: ",reduced)

let f1 = courses.find(s => s === "react")
console.log(f1)

let f2 = courses.findIndex(s => s === "node")
console.log("Index of node: ",f2)

// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
// const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92

let marks = [78, 92, 35, 88, 40, 67];


let pass = marks.filter(s=> s >= 40)
console.log("Pass marks: ",pass)


let grace = marks.map(s=> s + 5)
console.log("After adding grace marks",grace)


let reduce = marks.reduce((acc,s) => (acc > s) ? acc : s)
console.log("Highest Marks: ",reduce)


let f11 = marks.find(s => s<40)
console.log(f11)


let f22 = marks.findIndex(s => s === 92)
console.log("Index: ",f22)