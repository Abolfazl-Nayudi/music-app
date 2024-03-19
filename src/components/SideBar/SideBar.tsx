import {
  CircleUser,
  Clock3,
  CopyPlus,
  Disc3,
  Heart,
  History,
  Home,
  ListMusic,
  X,
} from 'lucide-react';
import './SideBar.css';
import Text from '../Text/Text';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxStateType } from '../../types/common/CommonTypes';
import { close, open } from '../../Redux/slices/menuSlice';
import { useState } from 'react';
export default function SideBar() {
  const [showCloseBtn, setShowCloseBtn] = useState(
    window.innerWidth >= 1280 ? false : true
  );

  const menuState = useSelector(
    (state: ReduxStateType) => state.menuReducer.open
  );
  const dispatch = useDispatch();
  const handleCloseBtn = () => dispatch(close());

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1280) {
      setShowCloseBtn(false);
      dispatch(open());
    } else {
      dispatch(close());
      setShowCloseBtn(true);
    }
  });

  return (
    <section
      className="sidebar"
      style={{
        translate: `${menuState ? '0px' : '-500px'}`,
      }}
    >
      <div
        className="close-btn"
        onClick={handleCloseBtn}
        style={{ display: `${showCloseBtn ? 'flex' : 'none'}` }}
      >
        <X />
      </div>
      <section className="sidebar-sections">
        <div className="logo">
          <h1>Melodies</h1>
        </div>

        <section className="menu">
          <span className="title">Menu</span>

          <div>
            <ul className="sidebar-items">
              <li>
                <span>
                  <Home />
                </span>
                <span>
                  <Text word={'Home'} />
                </span>
              </li>

              <li>
                <span>
                  <Disc3 />
                </span>
                <span>
                  <Text word={'Albums'} />
                </span>
              </li>
              <li>
                <span>
                  <CircleUser />
                </span>
                <span>
                  <Text word={'Artists'} />
                </span>
              </li>
            </ul>
          </div>
        </section>
        <section className="library">
          <span className="title">Library</span>

          <div>
            <ul className="sidebar-items">
              <li>
                <span>
                  <Clock3 />
                </span>
                <span>
                  <Text word={'Recently Added'} />
                </span>
              </li>

              <li>
                <span className="rounded-icon">
                  <History />
                </span>
                <span>
                  <Text word={'Most Played'} />
                </span>
              </li>
            </ul>
          </div>
        </section>
        <section className="playlist-favorite">
          <span className="title">Playlist and favorite</span>

          <div>
            <ul className="sidebar-items">
              <li>
                <span>
                  <Heart />
                </span>
                <span>
                  <Text word={'Your Favorites'} />
                </span>
              </li>

              <li>
                <span>
                  <ListMusic />
                </span>
                <span>
                  <Text word={'Your Playlist'} />
                </span>
              </li>
              <li style={{ color: '#0E9EEF' }}>
                <span>
                  <CopyPlus />
                </span>
                <span>
                  <Text word={'Add Playlist'} color="#0E9EEF" />
                </span>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </section>
  );
}
