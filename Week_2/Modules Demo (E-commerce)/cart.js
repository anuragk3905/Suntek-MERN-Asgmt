// ii. cart.js - Shopping cart operations

import { getProductById, checkStock } from './product.js';

let cartItems = [];

// Add to cart
export function addToCart(productId, quantity) {
  const product = getProductById(productId);
  if (!product) return "Product not found";

  if (!checkStock(productId, quantity)) {
    return "Not enough stock";
  }

  const existing = cartItems.find(item => item.productId === productId);

  if (existing) {
    const newQty = existing.quantity + quantity;

    if (!checkStock(productId, newQty))
      return "Not enough stock to increase quantity";

    existing.quantity = newQty;
  } else {
    cartItems.push({ productId, quantity });
  }

  return `Added ${quantity} x ${product.name} to cart`;
}

// Remove item
export function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.productId !== productId);
  return "Item removed";
}

// Update quantity
export function updateQuantity(productId, newQuantity) {
  const product = getProductById(productId);
  if (!product) return "Product not found";

  if (!checkStock(productId, newQuantity)) {
    return "Not enough stock";
  }

  const item = cartItems.find(i => i.productId === productId);
  if (!item) return "Item not in cart";

  item.quantity = newQuantity;
  return "Quantity updated";
}

// Return full cart
export function getCartItems() {
  return cartItems.map(item => ({
    ...item,
    product: getProductById(item.productId)
  }));
}

// Calculate cart total
export function getCartTotal() {
  return getCartItems().reduce(
    (sum, item) => sum + item.product.price * item.quantity,0);
}

// Clear cart
export function clearCart() {
  cartItems = [];
}
