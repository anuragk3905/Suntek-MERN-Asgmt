// iii. discount.js - Coupon and discount logic
// Available coupons

const coupons = {
  'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
  'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
  'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

// Validate coupon
export function validateCoupon(couponCode, cartTotal, cartItems) {
  const coupon = coupons[couponCode];
  if (!coupon)
    return { valid: false, message: "Invalid coupon" };

  if (cartTotal < coupon.minAmount)
    return { valid: false, message: `Minimum amount ₹${coupon.minAmount} required` };

  if (coupon.category) {
    const hasCategory = cartItems.some(
      item => item.product.category === coupon.category
    );
    if (!hasCategory)
      return { valid: false, message: `Coupon valid only for ${coupon.category}` };
  }

  return { valid: true, message: "Coupon applied" };
}

// Calculate discount
export function calculateDiscount(couponCode, cartTotal) {
  const c = coupons[couponCode];

  if (c.type === "percentage") {
    return (cartTotal * c.value) / 100;
  }
  if (c.type === "flat") {
    return c.value;
  }
  return 0;
}

// Apply discount
export function applyDiscount(cartTotal, couponCode, cartItems) {
  const validation = validateCoupon(couponCode, cartTotal, cartItems);

  if (!validation.valid) {
    return {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: validation.message
    };
  }

  const discount = calculateDiscount(couponCode, cartTotal);
  const finalTotal = cartTotal - discount;

  return {
    originalTotal: cartTotal,
    discount,
    finalTotal,
    message: "Discount applied successfully"
  };
}
