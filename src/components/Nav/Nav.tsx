import React from 'react';
import './Nav.css';

import Text from '../Text/Text';
export default function Nav() {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <a href="#">
            <Text word={'About'} />
          </a>
        </li>
        <li>
          <a href="#">
            <Text word={'Contact'} />
          </a>
        </li>
        <li>
          <a href="#">
            <Text word={'Premuim'} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
