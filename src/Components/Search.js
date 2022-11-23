import React from 'react';
import { useNavigate } from 'react-router-dom';
import arrow from '../images/arrow-left.png';

const Search = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="crypto-header">
      <button type="button" onClick={handleClick}>
        <img src={arrow} alt="back" />
      </button>
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default Search;
