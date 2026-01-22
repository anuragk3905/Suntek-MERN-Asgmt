const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

// Tasks:
    
// Calculate total marks
// Calculate average marks
// Find the highest scoring subject
// Add a new subject computer: 90

var total=0;
var allMarks=Object.values(marks);
for(var i in allMarks) total+=allMarks[i];
console.log("Total Marks: "+total);
console.log("Average Marks: "+total/allMarks.length);

var highestScore=0;
for(var i in allMarks){
    if(allMarks[i]>highestScore) highestScore=allMarks[i];
}
console.log("Highest Score: "+highestScore);
marks.computer=90;
console.log(Object.keys(marks));
console.log(Object.values(marks));