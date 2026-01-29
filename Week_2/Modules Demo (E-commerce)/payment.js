// iv. payment.js - Payment processing

import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function validatePaymentMethod(method) {
  return ["card", "upi", "cod"].includes(method);
}

function generateOrderId() {
  return "ORD" + Date.now();
}

// Process payment
export function processPayment(paymentMethod, couponCode = null) {
  if (!validatePaymentMethod(paymentMethod)) {
    return { status: "failed", message: "Invalid payment method" };
  }

  const items = getCartItems();
  const subtotal = getCartTotal();

  let discountDetails = { originalTotal: subtotal, discount: 0, finalTotal: subtotal };

  if (couponCode) {
    discountDetails = applyDiscount(subtotal, couponCode, items);
  }

  const { finalTotal, discount } = discountDetails;

  // Simulated payment success
  items.forEach(item => {
    reduceStock(item.productId, item.quantity);
  });

  clearCart();

  return {
    orderId: generateOrderId(),
    items,
    subtotal,
    discount,
    total: finalTotal,
    paymentMethod,
    status: "success",
    message: "Payment successful & order placed!"
  };
}
