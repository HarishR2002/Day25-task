// src/CartPage.js
import React from 'react';
import { useCart } from './CartContext';
import './CartPage.css'; // Import the CSS for styling

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, totalQuantity, totalAmount } = useCart();

  const handleQuantityChange = (productId, change) => {
    const item = cart.find(item => item.id === productId);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity > 0) {
        updateQuantity(productId, newQuantity);
      }
    }
  };

  return (
    <div className="cart-page">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <div className="product-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="product-info">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>
                <div className="pricing-details">
                  <p><strong>Subtotal:</strong> ${(item.price * item.quantity).toFixed(2)}</p>
                  <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <p><strong>Total Quantity:</strong> {totalQuantity}</p>
            <p><strong>Total Amount:</strong> ${totalAmount.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
