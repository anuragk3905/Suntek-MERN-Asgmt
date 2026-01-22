// Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
// --------------------------------------------------------------------

//  Given:
let enrollmentDeadline = new Date("2026-01-20");

let today = new Date();

// Tasks:
//   1.Check if:
//       * Today is before deadline → "Enrollment Open"
//       * Today is after deadline → "Enrollment Closed"

if(today<enrollmentDeadline) console.log("Enrollment Open");
else console.log("Enrollment Closed");

//   2. Validate user input date:
//       * Input: "2026-02-30"
//       * Detect whether the date is valid or invalid

const date=new Date("2026-12-40");
let month=date.getMonth();
if(month>11) console.log("false");
else{
    month+=2;
    const newdate=new Date(2026,month-1);
    console.log(date<=newdate);
}