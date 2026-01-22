const courses = ["javascript", "react", "node", "mongodb", "express"];

// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//     5. findIndex() of "node"

let result1=courses.filter(el=>el.length>5);
console.log(result1);

let result2=courses.map(el=>el.toUpperCase());
console.log(result2);

let result3=result2.reduce((acc,el)=>acc+" | "+el);
console.log(result3);

let result4=courses.find(el=>el==="react");
console.log(result4);

let result5=courses.findIndex(el=>el==="node");
console.log(result5);