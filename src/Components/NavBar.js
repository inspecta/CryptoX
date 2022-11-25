import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import logo from '../images/logo_crypto.png';

const NavBar = () => {
  const handleSearch = (e) => {
    console.log(e.target.value);
  };

  return (
    <header className="header flex">
      <div className="logo-header flex">
        <div className="logo flex">
          <span className="back">
            {/* <i className="fa fa-chevron-left" aria-hidden="true" /> */}
            <span className="back-txt white"><img src={logo} alt="Logo" className="logo" /></span>
          </span>
        </div>
      </div>
      <div className="right-side flex">
        <input type="search" placeholder="Search Cryptos" onChange={handleSearch} className="search-field" />
        <span className="audio"><i className="fa fa-microphone" aria-hidden="true" /></span>
        <span className="settings">
          <i className="fa fa-cog" aria-hidden="true" />
        </span>
      </div>
    </header>
  );
};

export default NavBar;
