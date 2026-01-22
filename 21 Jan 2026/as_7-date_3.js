// Assignment 3: Age Calculator (Intermediate)
// -------------------------------------------
// Input:
let dob = "2000-05-15";


// Tasks:
//         1. Calculate exact age in years
let birth=new Date(dob);
let date=new Date();
let ans=date.getFullYear()-birth.getFullYear();
if(date.getMonth()<=birth.getMonth()) ans-=1; 
console.log(ans);