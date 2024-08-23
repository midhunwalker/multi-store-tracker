import React, { useState } from 'react';

const ShopOwnerSignup = () => {
  const [formData, setFormData] = useState({
    shopName: '',
    shopOwnerName: '',
    shopOwnerID: '',
    password: '',
    confirmPassword: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation and form submission logic here
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Shop Owner Signup Data:', formData);
    // You can send this data to your backend or perform other actions
  };

  return (
    <div>
      <h2>Shop Owner Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Shop Name:</label>
          <input
            type="text"
            name="shopName"
            value={formData.shopName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Shop Owner Name:</label>
          <input
            type="text"
            name="shopOwnerName"
            value={formData.shopOwnerName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Shop Owner ID:</label>
          <input
            type="text"
            name="shopOwnerID"
            value={formData.shopOwnerID}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default ShopOwnerSignup;
