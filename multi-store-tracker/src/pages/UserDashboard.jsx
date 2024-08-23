import React from 'react';
import './UserDashboard.module.css'; // Ensure your styles are in this file

const UserDashboard = () => {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h3>Dashboard</h3>
          <button className="mode-switch" title="Switch Mode">
            <svg
              className="moon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m8.66-10.66l-.707-.707M4.34 5.34l-.707.707m12.728 12.728l-.707-.707m-12.728 0l-.707.707M16 12h1M3 12H2m16.66 4.34l.707.707m-12.728-12.728l.707-.707"
              />
            </svg>
          </button>
        </div>
        <ul className="sidebar-list">
          <li className="sidebar-list-item active">
            <a href="/user-dashboard">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h1v10h10v1H4a1 1 0 01-1-1V10zM17 3h1v10h-10v1H17a1 1 0 001-1V4a1 1 0 00-1-1z"
                />
              </svg>
              Dashboard
            </a>
          </li>
          {/* Add more sidebar links as needed */}
        </ul>
        <div className="account-info">
          <div className="account-info-picture">
            <img src="profile.jpg" alt="User Profile" />
          </div>
          <div className="account-info-name">User Name</div>
          <button className="account-info-more">⋮</button>
        </div>
      </aside>

      <main className="app-content">
        <div className="app-content-header">
          <h2 className="app-content-headerText">User Dashboard</h2>
          <button className="app-content-headerButton">New Action</button>
        </div>

        <div className="app-content-actions">
          <input
            type="text"
            className="search-bar"
            placeholder="Search something..."
          />
          <div className="app-content-actions-wrapper">
            <button className="action-button">
              <span>Filter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 15.414V20a1 1 0 001 1h2a1 1 0 001-1v-4.586l6.293-6.293A1 1 0 0021 6V4a1 1 0 00-1-1H4a1 1 0 00-1 1v2a1 1 0 00.293.707L11 14.586V19a1 1 0 001 1h2a1 1 0 001-1v-4.586l6.293-6.293A1 1 0 0021 6V4a1 1 0 00-1-1H4z"
                />
              </svg>
            </button>
            <div className="filter-button-wrapper">
              <button className="action-button">Sort</button>
              <div className="filter-menu">
                <label>Sort By</label>
                <select>
                  <option value="date">Date</option>
                  <option value="name">Name</option>
                  <option value="status">Status</option>
                </select>
                <div className="filter-menu-buttons">
                  <button className="filter-button apply">Apply</button>
                  <button className="filter-button reset">Reset</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="products-area-wrapper">
          {/* Insert your table or grid here */}
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
