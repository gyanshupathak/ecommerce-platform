// src/components/Navbar.js

import React, { useState } from 'react';


import { Link } from 'react-router-dom'; 
import { IoIosArrowDown } from 'react-icons/io';

import './navbar.css'; // Import the CSS file

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <nav className="navbar"> {/* Updated class name */}
          <a className="navbar-logo" href="/">FashionHub</a>
          <input type="text" placeholder="Search" className="search-bar" />

      <ul className="navbar-links"> {/* Updated class name */}
        <li><a  className="navbar-link-item" href="/home">Home</a></li>
        <li><a className="navbar-link-item" href="/products">Products</a></li>
        <li><a className="navbar-link-item" ><span onClick={toggleDropdown} className="category-button">
            Categories <IoIosArrowDown />
        </span>
        {dropdownOpen && (
            <div className="category-dropdown">
              <Link to="/mens" className="category-link">
                Mens
              </Link>
              <Link to="/womens" className="category-link">
                Womens
              </Link>
              
            </div>
          )}
        </a></li>
        <li><a className="navbar-link-item" href="/Cart">Cart</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;