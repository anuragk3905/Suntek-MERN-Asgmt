// Assignment 1: Date Creation & Extraction (Beginner)
// ---------------------------------------------------
// Tasks:
//        1. Create a Date object for current date & time.
const date=new Date();

//        2. Extract and display:
//                     * Year
//                     * Month (human readable)
//                     * Date
//                     * Day of week
//                     * Hours, minutes, seconds

console.log(date.getFullYear());

const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
const mon=date.getMonth()+1;
console.log(months[mon]);

console.log(date.getDate());

const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log(days[date.getDay()]);

console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

//       3. Display the date in this format:
//                     DD-MM-YYYY HH:mm:ss

const year=date.getFullYear();
let month=date.getMonth()+1;
let day=date.getDate();
let hours=date.getHours();
let minutes=date.getMinutes();
let seconds=date.getSeconds();

month=month<10 ? "0" + month : month;
day=day<10 ? "0" + day : day;
hours=hours<10 ? "0" + hours : hours;
minutes=minutes<10 ? "0" + minutes : minutes;
seconds=seconds<10 ? "0" + seconds : seconds;

console.log(`${day}-${month}-${year} ${hours}:${minutes}:${seconds}`);