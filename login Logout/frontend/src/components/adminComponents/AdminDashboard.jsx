import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AdminFooter from './AdminFooter';
import AdminSidebar from './AdminSidebar';
import '../../css/admin.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    
    if (!username || !email) {
      navigate('/home');
    }
  }, [navigate]);

  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="admin-content">
        <Outlet />
      </div>
      <AdminFooter />
    </div>
  );
};

export default AdminDashboard;
