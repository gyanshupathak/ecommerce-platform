import React from 'react';
import './mens.css'; // Import the CSS file


  // Placeholder product data (replace with real data later)
  const products = [
    
   
    {
      id: 3,
      title: 'Product 3',
      price: 39.99,
      image: '/images/Rectangle 22.png', // Replace with actual image URL
    },
    {
      id: 4,
      title: 'Product 4',
      price: 49.99,
      image: '/images/Rectangle 21-1.png', // Replace with actual image URL
    },
    {
      id: 5,
      title: 'Product 5',
      price: 59.99,
      image: '/images/Rectangle 20-1.png', // Replace with actual image URL
    },
    
    
    
    {
      id: 10,
      title: 'Product 10',
      price: 69.99,
      image: '/images/Rectangle 20-2.png', // Replace with actual image URL
    },
    // Add more products here if needed
  ];
    
 
  function ProductListing() {
    return (
      <div className="product-listing">
        <h2 className='feature'>Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-item" key={product.id}>
              <img className="product-image" src={product.image} alt={product.title} />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">Price: ${product.price}</p>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default ProductListing;