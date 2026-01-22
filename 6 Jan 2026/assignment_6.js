const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// Tasks:
    
// Use filter() to get only inStock products

let result1=cart.filter(el=>el.inStock===true);
console.log(result1);

// Use map() to create a new array with:  { name, totalPrice }

let result2=cart.map(el=>[el.name,el.price*el.quantity]);
console.log(result2);

// Use reduce() to calculate grand total cart value

let result3=cart.reduce((acc,el)=>acc+el.price*el.quantity,0);
console.log(result3);

// Use find() to get details of "Mouse"

let result4=cart.find(el=>el.name==="Mouse");
console.log(result4);

// Use findIndex() to find the position of "Keyboard"

let result5=cart.findIndex(el=>el.name==="Keyboard");
console.log(result5);