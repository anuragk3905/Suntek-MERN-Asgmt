const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28

let result1=temperatures.filter(el=>el>35);
console.log(result1);

let result2=temperatures.map(el=>el*(9/5)+32);
console.log(result2);

let result3=temperatures.reduce((ac,el)=>ac+el);
console.log(result3/temperatures.length);

let result4=temperatures.find(el=>el>40);
console.log(result4);

let result5=temperatures.findIndex(el=>el>28);
console.log(result5);