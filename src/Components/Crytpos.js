import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
import { FetchCryptos } from '../Redux/features/CryptoSlice';
import FormatNumber from '../Functions/FormatNumber';

const Crytpos = () => {
  const cryptosArr = [];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetched = useSelector((state) => state.cryptoReducer);

  useEffect(() => {
    if (fetched.status === '') {
      dispatch(FetchCryptos());
    }
  }, [fetched.status, dispatch]);

  if (fetched.status === 'success') {
    cryptosArr.push(fetched.cryptos[0]);
  }

  const handleClick = (cryptoObj) => {
    navigate(
      '/crypto-details',
      {
        state: {
          cryptos: cryptoObj,
        },
      },

    );
  };

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const searchResults = [];
  const searchMsg = document.querySelector('.search-msg');
  if (search === '') {
    if (searchMsg) {
      searchMsg.style.display = 'none';
    }
  }
  if (search) {
    searchMsg.style.display = 'block';

    cryptosArr[0].map((i) => {
      if (i.name.toLowerCase().includes(search.toLocaleLowerCase())) {
        searchResults.push(i);
      }
      cryptosArr[0] = searchResults;

      if (searchResults.length > 0) {
        searchMsg.classList.add('success');
        searchMsg.classList.remove('failure');
      } else {
        searchMsg.classList.remove('success');
        searchMsg.classList.add('failure');
      }
      return (cryptosArr);
    });
  }

  return (
    <div className="cryptos-container">
      <div className="wrapper flex">
        <div className="bg-wrapper" />
        <div className="wrapper-content p-two">
          <h4 className="white left h-one">CYRPTO CURRENCIES</h4>
          <p className="white left">
            {cryptosArr[0] ? cryptosArr[0].length : ''}
            {' '}
            Cyrptos
          </p>
        </div>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search Cryptos"
          onChange={handleSearch}
          value={search}
        />
      </div>
      <h4 className="white p-two">CRYPTO CURRENCY STATS</h4>
      <p className="search-msg">
        {!searchResults.length ? 'No Cyrptos Found.' : `${searchResults.length} Crypos Found.`}
      </p>
      <div className="crypto-details flex">
        {cryptosArr[0] ? cryptosArr[0].map((i) => (
          <button key={i.id} onClick={() => handleClick(i)} type="button" className="details-container p-two">
            <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
            <div colSpan="2" className="crypto-name white">
              <span className="white crypto-info">{i.name}</span>
              <p>
                <span className="price white font-4">
                  $
                  {i.priceUsd > 1000
                    ? FormatNumber(+(i.priceUsd))
                    : Math.round(i.priceUsd * 100) / 100}
                </span>
                <br />
                <span className="change font-4">
                  {Math.round(i.changePercent24Hr * 100) / 100}
                  {i.changePercent24Hr > 0
                    ? (<i className="fa fa-caret-up" aria-hidden="true" />)
                    : <i className="fa fa-caret-down" aria-hidden="true" />}
                  {i.changePercent24Hr === 0 ? (<i className="fa fa-minus" aria-hidden="true" />) : ''}
                </span>
              </p>
            </div>
          </button>
        ))
          : (
            <div>
              <div className="load-spinner">
                <FadeLoader color="#36d7b7" size={500} />
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default Crytpos;
