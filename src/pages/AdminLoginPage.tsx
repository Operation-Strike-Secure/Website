import React from 'react';
import './AdminLoginPage.css';

const AdminLoginPage: React.FC = () => {
  return (
    <div className="container mt-4">
      <h2 className="page-title">Admin Login Page</h2>
      <div className="login-card">
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;