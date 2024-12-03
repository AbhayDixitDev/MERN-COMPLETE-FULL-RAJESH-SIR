import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaBox, FaEdit, FaPlus, FaTasks, FaUser, FaSignOutAlt } from 'react-icons/fa';


const AdminSidebar = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    navigate('/home');
  };

  return (
    <div className="sidebar-container">
      <Link to="/admin" className="sidebar-brand">Admin Dashboard</Link>
      {username && (
        <div className="welcome-message">
          <FaUser /> Welcome, {username}!
        </div>
      )}
      <nav className="sidebar-nav">
        <Link to="/admin" className="sidebar-link">
          <FaHome /> Dashboard
        </Link>
        <Link to="/admin/products" className="sidebar-link">
          <FaBox /> Products
        </Link>
        <Link to="/admin/edit" className="sidebar-link">
          <FaEdit /> Edit
        </Link>
        <Link to="/admin/add" className="sidebar-link">
          <FaPlus /> Add New
        </Link>
        <Link to="/admin/tasks" className="sidebar-link">
          <FaTasks /> Tasks
        </Link>
        <span onClick={handleLogout} className="sidebar-link logout">
          <FaSignOutAlt /> Logout
        </span>
      </nav>
    </div>
  );
};

export default AdminSidebar;
