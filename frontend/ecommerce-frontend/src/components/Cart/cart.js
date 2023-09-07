import React, { useState } from 'react';
import './cart.css';

function CartPage({cart}) {
  const [cartItems, setCartItems] = useState(cart
   
  );

  const increaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      setCartItems(updatedCartItems);
    }
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <img
            src={item.image}
            alt={item.name}
            className="cart-item-image"
          />
          <div className="cart-item-details">
            <h2 className="cart-item-name">{item.name}</h2>
            <p className="cart-item-price">${item.price.toFixed(2)}</p>
            <div className="cart-item-quantity">
              <button
                className="quantity-button"
                onClick={() => decreaseQuantity(index)}
              >
                -
              </button>
              <span className="item-quantity">{item.quantity}</span>
              <button
                className="quantity-button"
                onClick={() => increaseQuantity(index)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
      <p className="cart-total">
        Total: $
        {cartItems
          .reduce((total, item) => total + item.price * item.quantity, 0)
          .toFixed(2)}
      </p>
      <button className="checkout-button">Checkout</button>
    </div>
  );
}

export default CartPage;