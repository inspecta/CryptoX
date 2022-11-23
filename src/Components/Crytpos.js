import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { FetchCryptos } from '../Redux/features/CryptoSlice';

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
    // console.log(cryptoObj);
    navigate(
      '/crypto-details',
      {
        state: {
          cryptos: cryptoObj,
        },
      },

    );
  };

  return (
    <div className="cryptos-container">
      <table>
        <thead>
          <tr>
            <th colSpan={1}>Rank</th>
            <th colSpan={2}>Name</th>
            <th colSpan={1}>Price</th>
            <th colSpan={1}>Market Cap</th>
            <th colSpan={1}>Supply</th>
          </tr>
        </thead>
        <tbody>
          {cryptosArr[0] ? cryptosArr[0].map((i) => (
            <tr key={i.id} onClick={() => { handleClick(i); }}>
              <td className="rank">{i.rank}</td>
              <td colSpan="2" className="">
                <span className="name">{i.name}</span>
                <span className="symbol">{i.symbol}</span>
              </td>
              <td><span className="price">{i.priceUsd}</span></td>
              <td><span className="market-cap">{i.marketCapUsd}</span></td>
              <td><span className="volume">{i.supply}</span></td>
            </tr>
          ))
            : (
              <tr>
                <td className="load-spinner">
                  <ClipLoader color="red" size={250} />
                </td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  );
};

export default Crytpos;
