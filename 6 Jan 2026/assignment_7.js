const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// Tasks:
    
// filter() students who passed (marks ≥ 40)

let result1=students.filter(el=>el.marks>=40);
console.log(result1);

// map() to add a grade field
//         ≥90 → A
//         ≥75 → B
//         ≥60 → C
//         else → D

let result2=students.map(el=>{
    if(el.marks>=90) el.grade='A';
    else if(el.marks>=75 && el.marks<90) el.grade='B';
    else if(el.marks>=60 && el.marks<75) el.grade='C';
    else el.grade='D';
})
   
// reduce() to calculate average marks
// find() the student who scored 92
// findIndex() of student "Kiran"