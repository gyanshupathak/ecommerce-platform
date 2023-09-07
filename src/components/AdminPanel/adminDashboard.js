import React from 'react';
import { Link } from 'react-router-dom';
import './adminDasboard.css';

function AdminDashboard() {
  return (
    <div className="admin-dashboard-container">
      <h2>Admin Dashboard</h2>
      <div className="admin-features">
        <Link to="/admin/add-product">Add Product</Link>
        <Link to="/admin/edit-product">Edit Product</Link>
        <Link to="/admin/delete-product">Delete Product</Link>
      </div>
    </div>
  );
}

export default AdminDashboard;