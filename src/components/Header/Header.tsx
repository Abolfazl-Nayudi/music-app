import React from 'react';
import './Header.css';
import LoginBtn from '../Buttons/LoginBtn/LoginBtn';
import SignUp from '../Buttons/SignUpBtn/SignUp';
import Nav from '../Nav/Nav';
import SearchBar from '../SearchBar/SearchBar';
export default function Header() {
  return (
    <header>
      <div>
        <SearchBar />
      </div>
      <div>
        <Nav />
      </div>
      <div className="auth-btn">
        <LoginBtn />
        <SignUp />
      </div>
    </header>
  );
}
