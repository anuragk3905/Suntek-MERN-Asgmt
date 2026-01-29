// HANDS-ON 3
// ----------
//   Test data:
const students = [
  { name: "Asha", marks: [80, 75, 90] },
  { name: "Kiran", marks: [60, 55, 70] },
  { name: "Meena", marks: [95, 92, 88] }
];

// Operations:
//  1. Calculate average marks per student
const averages = students.map(stu => {
  const sum = stu.marks.reduce((a, b) => a + b, 0);
  const avg = sum / stu.marks.length;
  return avg;
});
console.log(averages);

//  2. Create a new array with { name, average }
const nameWithAverage = students.map(stu => {
  const avg = stu.marks.reduce((a, b) => a + b, 0) / stu.marks.length;
  return { name: stu.name, average: avg };
});
console.log(nameWithAverage);

//  3. Find students with average > 80
const highScorers = nameWithAverage.filter(stu => stu.average > 80);
console.log(highScorers);

//  4. Check if any student failed (average < 40)
const anyFailed = nameWithAverage.some(stu => stu.average < 40);
console.log(anyFailed);

//  5. Extract only student names who passed
const passedStudents = nameWithAverage.filter(stu => stu.average >= 40).map(stu => stu.name);
console.log(passedStudents);
