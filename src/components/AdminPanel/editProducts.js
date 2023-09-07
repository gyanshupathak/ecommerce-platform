import React, { useState, useEffect } from 'react';

function EditProduct({ match, history }) {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    imageURL: '',
  });

  useEffect(() => {
    // Fetch the product data based on the ID from the URL parameter
    fetch(`http://localhost:3005/api/products/${match.params.id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product: ', error));
  }, [match.params.id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a PUT request to update the product
    fetch(`http://localhost:3005/api/products/${match.params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then(() => {
        // Redirect back to the admin dashboard or display a success message
        history.push('/admin');
      })
      .catch((error) => {
        console.error('Error updating product: ', error);
      });
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={product.title}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="imageURL"
          placeholder="Image URL"
          value={product.imageURL}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default EditProduct;