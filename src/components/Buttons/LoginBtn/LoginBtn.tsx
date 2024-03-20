import React from 'react';
import './LoginBtn.css';
import { useNavigate } from 'react-router-dom';
export default function LoginBtn() {
  const navigate = useNavigate();

  return (
    <button className="login-btn" onClick={() => navigate('/login')}>
      Login
    </button>
  );
}
