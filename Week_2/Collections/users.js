// HANDS-ON 1
// ----------
// Test data:
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: false },
  { id: 3, name: "Suman", role: "student", active: true }
];

// Operations:
// 1. Get only active users
const activeUsers = users.filter(user => user.active);
console.log(activeUsers);

// 2. Extract only names of active users
const activeUserNames = users.filter(user => user.active).map(user => user.name);
console.log(activeUserNames);

// 3. Check if any admin exists
const adminExists = users.some(user => user.role === "admin");
console.log(adminExists);

// 4. Find user with id = 2
const userWithId2 = users.find(user => user.id === 2);
console.log(userWithId2);

// 5. Create a new array where Ravi becomes inactive (do NOT mutate)
const updatedUsers = users.map(user =>
  user.name === "Ravi"
    ? { ...user, active: false }
    : user
);
console.log(updatedUsers);