import React from 'react';
import './SignUpBtn.css';
import { useNavigate } from 'react-router-dom';
export default function SignUp() {
  const navigate = useNavigate();

  return (
    <button className="signup-btn" onClick={() => navigate('/register')}>
      Sign Up
    </button>
  );
}
