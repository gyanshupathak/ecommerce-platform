// App.js
import React, { useState } from 'react';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListing from './components/ProductListing/ProductListing';
import LandingPage from './components/UserProfile/landingPage/landingPage'; // Import the LandingPage component
import TrendingPage from './components/HomePage/TrendingPage'; // Import the Trending.js component
import Mens from './components/mens/mens'; 
import Womens from './components/womens/womens'; 
import Cart from './components/Cart/cart'; 
import AdminDashboard from './components/AdminPanel/adminDashboard';
import AddProduct from './components/AdminPanel/addProducts';
import EditProduct from './components/AdminPanel/editProducts';
import DeleteProduct from './components/AdminPanel/deleteProducts';






function App() {
    const [cart, setCart] = useState([]);

const addToCart = (product) => {
  // Check if the product is already in the cart
  const existingItem = cart.find((cartItem) => cartItem.id === product.id);

  if (existingItem) {
    // If the product exists, update its quantity
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  } else {
    // If the product is not in the cart, add it with quantity 1
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    
  }
};

  return (
    <Router>
      <div className="App">
        <header>
          <Routes>
            <Route path="/products" element={<Navbar />} /> 
            <Route path="/home" element={<Navbar />} />
            <Route path="/mens" element={<Navbar />} /> 
            <Route path="/womens" element={<Navbar />} /> 
            <Route path="/cart" element={<Navbar />} /> 
          </Routes>
          
        </header>
        <main>
          {/* Routing */}
          <Routes>
            <Route path="/products" element={<ProductListing />} />
            <Route path="/home" element={<TrendingPage />} />
            <Route path="/mens" element={<Mens />} />
          
            <Route path="/womens" element={<Womens />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/cart" element={<Cart cart={cart} />} />

            <Route path="/admin"  element={<AdminDashboard/>} />
            <Route path="/admin/add-product" element={<AddProduct/>} />
            <Route path="/admin/edit-product/:id" element={<EditProduct/>} />
            <Route path="/admin/delete-product/:id" element={<DeleteProduct/>} />

          </Routes>
        </main>
        
      </div>

      
    </Router>
  );
}

export default App;
