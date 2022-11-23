import { configureStore } from '@reduxjs/toolkit';
import crypto from './features/CryptoSlice';

const Store = configureStore({
  reducer: {
    cryptoReducer: crypto,
  },
});

export default Store;
