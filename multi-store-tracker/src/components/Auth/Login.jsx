import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'; // Import the CSS module

function Login() {
  const [role, setRole] = useState('user'); // Default role is user
  const [username, setUsername] = useState('');
  const [shopOwnerID, setShopOwnerID] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setUsername('');
    setShopOwnerID('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle login logic here based on role
    if (role === 'user') {
      console.log('User Login:', { username, password });
      // Implement user login API call
    } else if (role === 'shopowner') {
      console.log('Shop Owner Login:', { shopOwnerID, password });
      // Implement shop owner login API call
    }
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
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
          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Username:
              <input
                type="text"
                className={styles.inputField}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
          </div>
        )}

        {role === 'shopowner' && (
          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Shop Owner ID:
              <input
                type="text"
                className={styles.inputField}
                value={shopOwnerID}
                onChange={(e) => setShopOwnerID(e.target.value)}
                required
              />
            </label>
          </div>
        )}

        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Password:
            <input
              type="password"
              className={styles.inputField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>

        <button type="submit" className={styles.button}>Login</button>
        <label className={styles.noAccountLabel}>
          Don't have an account?{' '}
          <button
            type="button"
            className={styles.buttonLink}
            onClick={() => navigate('/signup')}
          >
            Signup
          </button>
        </label>
      </form>
    </div>
  );
}

export default Login;
