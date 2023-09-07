import React from 'react';
import './womens.css'; // Import the CSS file


  // Placeholder product data (replace with real data later)
  const products = [
    {
      id: 1,
      title: 'Product 1',
      price: 19.99,
      image: '/images/Rectangle 20.png', // Replace with actual image URL
    },
    {
      id: 2,
      title: 'Product 2',
      price: 29.99,
      image: '/images/Rectangle 21.png', // Replace with actual image URL
    },
   
    
   
    {
      id: 6,
      title: 'Product 6',
      price: 69.99,
      image: '/images/Rectangle 25-2.png', // Replace with actual image URL
    },
   
    {
      id: 8,
      title: 'Product 8',
      price: 69.99,
      image: '/images/Rectangle 25-1.png', // Replace with actual image URL
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