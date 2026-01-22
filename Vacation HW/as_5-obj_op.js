//object operations simple


// Assignment 1: User Profile Manager
// ----------------------------------
// Scenario : You are managing a logged-in user’s profile in a web application.

// Test data:
// const user = {
//   id: 101,
//   name: "Ravi",
//   email: "ravi@gmail.com",
//   role: "student",
//   isActive: true
// };

// Tasks:
//     1. Read and print the user’s name and email
//     2. Add a new property lastLogin: "2026-01-01"
//     3. Update role from "student" to "admin"
//     4. Delete the isActive property
//     5. Use Object.keys() to list all remaining fields

const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};
console.log("User Name: " + user.name);
console.log("User Email: " + user.email);

user.lastLogin = "2026-01-01";
console.log(user);

user.role = "admin";
console.log(user);

delete user.isActive;
console.log(user);

console.log(Object.keys(user));


// Assignment 2: Exam Result Summary
// ---------------------------------
// Scenario : Marks are stored subject-wise for a student.

// Test data:
// const marks = {
//   maths: 78,
//   physics: 65,
//   chemistry: 82,
//   english: 55
// };

// Tasks:
//     1. Calculate total marks
//     2. Calculate average marks
//     3. Find the highest scoring subject
//     4. Add a new subject computer: 90

const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
let total = 0,n=0;
for(let v in marks){
    total+=marks[v];
    n++;
}
console.log("Total Marks: " + total);

let avg = total / n;
console.log("Average Marks: " + avg);

let largest = marks.maths;
for(let v in marks){
    if(marks[v] > largest){
        largest = marks[v];
    }
}
console.log("Largest Score: " + largest);

marks.computer = 95;
console.log(marks);

// Assignment 3: Application Settings Controller
// ---------------------------------------------
// Scenario : A web app stores user preferences as settings.

// Test data:
// const settings = {
//   theme: "light",
//   notifications: true,
//   autoSave: false,
//   language: "en"
// };


// Tasks :
//     1.Toggle theme between "light" and "dark"
//     2. Turn autoSave to true
//     3. Remove the notifications setting
//     4. Freeze the settings object so it cannot be modified

const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

if (settings.theme === "light") {
  settings.theme = "dark";
} else {
  settings.theme = "light";
}
console.log("After toggling theme:", settings);

settings.autoSave = true;
console.log("After enabling autoSave:", settings);

delete settings.notifications;
console.log("After removing notifications:", settings);

Object.freeze(settings);
settings.language = "fr";

console.log("Frozen settings object:", settings);