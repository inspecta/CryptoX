import React from 'react';
import logo from '../images/logo_crypto.png';
import hamburger from '../images/hamburger.png';

const NavBar = () => {
  const handleSearch = (e) => {
    console.log(e.target.value);
  };

  return (
    <header>
      <div className="search">
        <input type="search" placeholder="Search Cryptos" onChange={handleSearch} />
      </div>
      <div className="logo-hamburger">
        <div className="logo">
          <a className="logo-img" href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="hamburger">
          <img src={hamburger} alt="hamburger" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
