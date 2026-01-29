// HANDS-ON 2
// ----------
//   Test data:
  const cart = [
  { id: 101, product: "Laptop", price: 50000, qty: 1 },
  { id: 102, product: "Mouse", price: 500, qty: 2 }
];

// Operations:
//  1. Calculate total cart value
const totalValue = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
console.log(totalValue);

//  2. Increase quantity of Mouse to 3 (immutably)
const updatedCartQty = cart.map(item =>
  item.product === "Mouse"
    ? { ...item, qty: 3 }
    : item
);
console.log(updatedCartQty);

//  3. Remove Laptop from cart
const cartWithoutLaptop = cart.filter(item => item.product !== "Laptop");
console.log(cartWithoutLaptop);

//  4. Extract only { product, totalPrice } per item
const productTotals = cart.map(item => ({
  product: item.product,
  totalPrice: item.price * item.qty
}));
console.log(productTotals);

//  5. Check if all items cost more than ₹300
const allAbove300 = cart.every(item => item.price > 300);
console.log(allAbove300);