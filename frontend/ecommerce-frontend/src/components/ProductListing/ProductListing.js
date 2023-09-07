import React,{useState,useEffect} from 'react';
import './ProductListing.css'; // Import the CSS file


function ProductListing() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3005/api/products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error('Error fetching products');
      }
    } catch (error) {
      console.error('Error fetching products: ', error);
    }
  };
  
    useEffect(() => {
      fetchProducts();
    }, []);
    
    return (
      <div>
        <h1>Products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <img src={product.imageURL} alt={product.title} />
            </li>
          ))}
        </ul>
      </div>
    );
  
};






 

export default ProductListing;