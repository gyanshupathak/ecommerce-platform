import React, { useEffect } from 'react';

function DeleteProduct({ match, history }) {
  useEffect(() => {
    // Send a DELETE request to delete the product based on the ID from the URL parameter
    fetch(`http://localhost:3005/api/products/${match.params.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Redirect back to the admin dashboard or display a success message
        history.push('/admin');
      })
      .catch((error) => {
        console.error('Error deleting product: ', error);
      });
  }, [match.params.id, history]);

  return (
    <div>
      <h2>Delete Product</h2>
      <p>Deleting the product...</p>
    </div>
  );
}

export default DeleteProduct;