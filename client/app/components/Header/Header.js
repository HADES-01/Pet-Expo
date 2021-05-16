import React from 'react';
import img from "../../../public/assets/img/logo.png"
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <header className = "header-flex-container">
    <div className = "logo-flex-container">
        <div className = "logo-img"><img src={img} /></div>
        <div className = "logo-text">
          <span>Pet Expo</span>
        </div>
    </div>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/helloworld">Hello World</Link>
      </nav>
    </div>

    <hr />
  </header>
);

export default Header;
