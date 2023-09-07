import React from 'react';
import './popup.css'; // Create a CSS file for styling

function CartPopup({ product, onClose }) {
  return (
    <div className="cart-popup">
      <div className="popup-content">
        <p>{product.title} has been added to your cart!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default CartPopup;