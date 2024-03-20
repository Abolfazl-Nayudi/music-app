import React, { useEffect } from 'react';
import './Header.css';
import LoginBtn from '../Buttons/LoginBtn/LoginBtn';
import SignUp from '../Buttons/SignUpBtn/SignUpBtn';
import Nav from '../Nav/Nav';
import SearchBar from '../SearchBar/SearchBar';
import { Menu } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { open, close } from '../../Redux/slices/menuSlice';
import { ReduxStateType } from '../../types/common/CommonTypes';

export default function Header() {
  const dispatch = useDispatch();
  const menuState = useSelector(
    (state: ReduxStateType) => state.menuReducer.open
  );

  const handleClick = () => (menuState ? dispatch(close()) : dispatch(open()));

  useEffect(() => {
    if (window.innerWidth <= 1280) {
      console.log('in if block', menuState);
      dispatch(close());
    } else {
      console.log('in else block', menuState);
      dispatch(open());
    }
  }, []);

  return (
    <header>
      <div className="menu-icon" onClick={handleClick}>
        <Menu />
      </div>

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
