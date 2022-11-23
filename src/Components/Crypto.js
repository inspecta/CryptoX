import React from 'react';
import { useLocation } from 'react-router-dom';

const Crypto = () => {
  const { state } = useLocation();
  const data = state.cryptos;

  return (
    <div className="crypo-container">
      <div className="header-details">
        <div className="rank">{data.rank}</div>
        <div className="header-info">
          <h3>
            {data.name}
            {' '}
            {(data.symbol)}
          </h3>
          <p>{data.priceUsd}</p>
          <span>5.89%</span>
        </div>
      </div>
      <div className="header-body">
        <div className="market-cap">
          <h3>Market Cap</h3>
          <p>{data.marketCapUsd}</p>
        </div>
        <div className="volume-cap">
          <h3>Volume (24Hr)</h3>
          <p>{data.volumeUsd24Hr}</p>
        </div>
      </div>
      <div className="crypto-low">
        <div className="supply">
          <h3>Supply</h3>
          <p>{data.supply}</p>
        </div>
        <div className="btns">
          <p className="website"><a href="https://bitcoin.org">Website</a></p>
          <p className="explorer"><a href={data.explorer}>Explorer</a></p>
        </div>
      </div>
    </div>

  );
};

export default Crypto;
