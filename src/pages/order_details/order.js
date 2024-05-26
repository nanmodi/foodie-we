// src/PlaceOrder.js
import React, { useState } from 'react';
import './order.css';

const PlaceOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    item: '',
    quantity: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Order placed:', formData);
  };

  return (
    <div className="place-order-container">
      <h2>Place Your Order</h2>
      <form onSubmit={handleSubmit} className="place-order-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="item">Item:</label>
          <input
            type="text"
            id="item"
            name="item"
            value={formData.item}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            min="1"
          />
        </div>
        <button type="submit" className="submit-button">Place Order</button>
      </form>
    </div>
  );
};

export default PlaceOrder;

