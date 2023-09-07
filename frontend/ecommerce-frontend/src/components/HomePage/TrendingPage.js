

import React from 'react';
import './TrendingPage.css'; // Import the CSS file


function TrendingPage() {
  return (
    <div>
          <div className='value-pack1'>
                <h1>Trending Page</h1>
                <h3>Tshirts/Tops</h3>
                <h1>Summer Value Pack</h1>
              <h3>cool/colourful/comfy</h3>
              <button className='btn-shop-now'>Shop Now</button>

          </div>

          <div className='value-pack2'>
                    
                    <h3>Low Price</h3>
                    <h1>High Coziness</h1>
                  <h3>UPTO 50% OFF</h3>
                  <button className='btn-shop-now'>Explore Items</button>

      </div>
      <div className='value-pack3'>
                    
                    <h3>Beyoung Presents</h3>
                    <h1>Brezzy Sumeer Style</h1>
                  <h3>UPTO 50% OFF</h3>
                  <button className='btn-shop-now'>Explore Items</button>

          </div>
      <div className='div-container'>
          <img
            src="/images/1.png" // Replace with the actual path to your image
            alt="Trending"
            className="trending-image1"
              />
              <img
            src="/images/2.png" // Replace with the actual path to your image
            alt="Trending"
            className="trending-image2"
              />
              <img
            src="/images/3.png" // Replace with the actual path to your image
            alt="Trending"
          className="trending-image3"
          
        />
        
      </div>
        
      {/* Add your content here */}
    </div>
  );
}

export default TrendingPage;
