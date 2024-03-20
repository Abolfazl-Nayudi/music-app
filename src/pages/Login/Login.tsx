import React from 'react';
import logo from '../../assets/logo/logo.png';
import googleIcon from '../../assets/icons/google.png';
import facebookIcon from '../../assets/icons/facebook.png';
import './Login.css';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <section className="login-page">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1 className="login-title">Melodies</h1>
      </div>
      <div className="login-form">
        <h2>Login To Continue</h2>
        <form action="">
          <input type="email" placeholder="E-Mail" />
          <input type="password" placeholder="Password" />
          <div className="login-buttons">
            <a href="#">
              <span>Forgot password</span>
              <span>
                <ChevronRight />
              </span>
            </a>
            <button>Login</button>
          </div>
        </form>
      </div>
      <div className="login-with-media">
        <div className="google-login">
          <button>
            <img src={googleIcon} alt="google icon" />
            <span>Google Login</span>
          </button>
        </div>
        <div className="facebook-login">
          <button>
            <img src={facebookIcon} alt="facebook icon" />
            <span>Facebook Login</span>
          </button>
        </div>
      </div>
      <div className="have-not-account">
        <span>Don't Have An Account ?</span>
        <button>
          <Link to="/register">Sign up</Link>
        </button>
      </div>
    </section>
  );
}
