import React, { useState } from 'react';

function AddProductForm({ onAddProduct }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    imageURL: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to your /api/products endpoint with formData
    fetch('http://localhost:3005/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        
      })
      .catch((error) => {
        console.error('Error adding product: ', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleInputChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="imageURL"
        placeholder="Image URL"
        value={formData.imageURL}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;