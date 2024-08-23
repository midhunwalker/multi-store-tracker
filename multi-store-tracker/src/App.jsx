import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import UserDashboard from './pages/UserDashboard';
import ShopOwnerDashboard from './pages/ShopOwnerDashboard';
import SearchStores from './pages/SearchStores';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/shop-owner-dashboard" element={<ShopOwnerDashboard />} />
        <Route path="/search" element={<SearchStores />} />
      </Routes>
    </Router>
  );
}

export default App;

