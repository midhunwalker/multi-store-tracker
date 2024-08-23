import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Signup.module.css'; // Import the CSS module

const Signup = () => {
  const navigate = useNavigate(); // For navigation
  const [role, setRole] = useState('user'); // Default role is user
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    rationCardNumber: '',
    address: '',
    shopName: '',
    shopOwnerID: '',
    shopLocation: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setFormData({
      username: '',
      password: '',
      confirmPassword: '',
      rationCardNumber: '',
      address: '',
      shopName: '',
      shopOwnerID: '',
      shopLocation: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle signup logic based on role
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (role === 'user') {
      console.log('User Signup Data:', {
        username: formData.username,
        password: formData.password,
        rationCardNumber: formData.rationCardNumber,
        address: formData.address,
      });
      // Implement user signup API call here

      // Navigate to user dashboard
      navigate('/user-dashboard');
    } else if (role === 'shopowner') {
      console.log('Shop Owner Signup Data:', {
        shopName: formData.shopName,
        shopOwnerID: formData.shopOwnerID,
        shopLocation: formData.shopLocation,
        password: formData.password,
      });
      // Implement shop owner signup API call here

      // Navigate to shop owner dashboard
      navigate('/shop-owner-dashboard');
    }
  };

  return (
    <div className={styles.container}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Select Role:
            <select
              className={styles.selectRole}
              value={role}
              onChange={handleRoleChange}
            >
              <option value="user">User</option>
              <option value="shopowner">Shop Owner</option>
            </select>
          </label>
        </div>

        {role === 'user' && (
          <>
            <div className={styles.inputGroup}>
              <label className={styles.label}>
                Username:
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>
                Password:
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>
                Confirm Password:
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>
                Ration Card Number:
                <input
                  type="text"
                  name="rationCardNumber"
                  value={formData.rationCardNumber}
                  onChange={handleChange}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>
                Address:
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
          </>
        )}

        {role === 'shopowner' && (
          <>
            <div className={styles.inputGroup}>
              <label className={styles.label}>
                Shop Name:
                <input
                  type="text"
                  name="shopName"
                  value={formData.shopName}
                  onChange={handleChange}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>
                Shop Owner ID:
                <input
                  type="text"
                  name="shopOwnerID"
                  value={formData.shopOwnerID}
                  onChange={handleChange}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>
                Shop Location:
                <input
                  type="text"
                  name="shopLocation"
                  value={formData.shopLocation}
                  onChange={handleChange}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>
                Password:
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>
                Confirm Password:
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
          </>
        )}

        <button type="submit" className={styles.button}>Sign Up</button>
        <p className={styles.noAccountLabel}>
          Already have an account?{' '}
          <button
            type="button"
            className={styles.buttonLink}
            onClick={() => navigate('/')}
          >
            Log In
          </button>
        </p>
      </form>
    </div>
  );
};

export default Signup;
