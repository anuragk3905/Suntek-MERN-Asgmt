// array-operations-advanced

// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
// const cart = [
//   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
//   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
//   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
//   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
// ];

// Tasks:
//     1. Use filter() to get only inStock products
//     2. Use map() to create a new array with:  { name, totalPrice }
//     3. Use reduce() to calculate grand total cart value
//     4. Use find() to get details of "Mouse"
//     5. Use findIndex() to find the position of "Keyboard"

let cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

let fil1 = cart.filter(s => s.inStock === true);
console.log("In Stock products: ", fil1);

let m1 = cart.map(s => {
  return {
    name: s.name,
    totalPrice: s.price * s.quantity
  };
});
console.log("Names and the total price: ", m1);

let total1 = cart.reduce((acc, s) => acc + (s.price * s.quantity), 0);
console.log("Grand total: ", total1);

let f11 = cart.find(s => s.name === "Mouse");
console.log(f11);

let f12 = cart.findIndex(s => s.name === "Keyboard");
console.log("Keyboard index: ", f12);



// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
// const students = [
//   { id: 1, name: "Ravi", marks: 78 },
//   { id: 2, name: "Anjali", marks: 92 },
//   { id: 3, name: "Kiran", marks: 35 },
//   { id: 4, name: "Sneha", marks: 88 },
//   { id: 5, name: "Arjun", marks: 40 }
// ];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D

//    3. reduce() to calculate average marks
//    4. find() the student who scored 92
//    5. findIndex() of student "Kiran"

let students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

let fil2 = students.filter(s => s.marks >= 40);
console.log("Passed Students: ", fil2);

let m2 = students.map(s => {
  if (s.marks >= 90) {
    s.grade = "A";
  } else if (s.marks >= 75) {
    s.grade = "B";
  } else if (s.marks >= 60) {
    s.grade = "C";
  } else {
    s.grade = "D";
  }
  return s;
});
console.log(m2);

let total2 = students.reduce((acc, s) => acc + s.marks, 0);
console.log("Average: ", total2 / students.length);

let f21 = students.find(s => s.marks === 92);
console.log("Student with 92 marks: ", f21);

let f22 = students.findIndex(s => s.name === "Kiran");
console.log("Kiran's index: ", f22);



// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
// const employees = [
//   { id: 201, name: "Amit", salary: 45000, department: "IT" },
//   { id: 202, name: "Neha", salary: 60000, department: "HR" },
//   { id: 203, name: "Rahul", salary: 75000, department: "IT" },
//   { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
// ];

// Tasks:
//     1. filter() employees from IT department
//     2. map() to add:
//             netSalary = salary + 10% bonus

//     3. reduce() to calculate total salary payout
//     4. find() employee with salary 30000
//     5. findIndex() of employee "Neha"

let employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

let fil3 = employees.filter(e => e.department === "IT");
console.log(fil3);

let m3 = employees.map(e => {
  e.netSalary = e.salary + e.salary * 0.10;
  return e;
});
console.log(m3);

let total3 = employees.reduce((acc, e) => acc + e.salary, 0);
console.log(total3);

let f31 = employees.find(e => e.salary === 30000);
console.log(f31);

let f32 = employees.findIndex(e => e.name === "Neha");
console.log(f32);



// ASSIGNMENT 4: 
// ------------
// Movie Streaming Platform

// You are working on a movie recommendation system.

// Test data:
// const movies = [
//   { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
//   { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
//   { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
//   { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
// ];


// Tasks:
//     1. filter() only "Sci-Fi" movies
//     2. map() to return:
//             "Inception (8.8)"

//     3. reduce() to find average movie rating
//     4. find() movie "Joker"
//     5. findIndex() of "Avengers"

let movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

let fil4 = movies.filter(m => m.genre === "Sci-Fi");
console.log(fil4);

let m4 = movies.map(m => m.title + " (" + m.rating + ")");
console.log(m4);

let total4 = movies.reduce((acc, m) => acc + m.rating, 0);
console.log(total4 / movies.length);

let f41 = movies.find(m => m.title === "Joker");
console.log(f41);

let f42 = movies.findIndex(m => m.title === "Avengers");
console.log(f42);



// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
// const transactions = [
//   { id: 1, type: "credit", amount: 5000 },
//   { id: 2, type: "debit", amount: 2000 },
//   { id: 3, type: "credit", amount: 10000 },
//   { id: 4, type: "debit", amount: 3000 }
// ];


// Tasks:
//     1. filter() all credit transactions
//     2. map() to extract only transaction amounts
//     3. reduce() to calculate final account balance
//     4. find() the first debit transaction
//     5. findIndex() of transaction with amount 10000

let transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

let fil5 = transactions.filter(t => t.type === "credit");
console.log(fil5);

let m5 = transactions.map(t => t.amount);
console.log(m5);

let total5 = transactions.reduce((acc, t) => {
  if (t.type === "credit") {
    return acc + t.amount;
  } else {
    return acc - t.amount;
  }
}, 0);
console.log(total5);

let f51 = transactions.find(t => t.type === "debit");
console.log(f51);

let f52 = transactions.findIndex(t => t.amount === 10000);
console.log(f52);
