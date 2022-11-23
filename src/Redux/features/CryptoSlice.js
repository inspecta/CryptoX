import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cryptos: [],
  status: '',
};

const FETCH_CRYPTOS = 'redux/FETCH_CRYPTOS';

export const FetchCryptos = createAsyncThunk(
  FETCH_CRYPTOS,
  async (thunkAPI) => {
    try {
      const xx = await axios.get('https://api.coincap.io/v2/assets');
      return xx.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  },
);

const CryptoSlice = createSlice({
  name: 'cryptoReducer',
  initialState,
  reducers: {},
  extraReducers: {

    [FetchCryptos.pending]: (state) => {
      state.status = 'loading';
    },

    [FetchCryptos.fulfilled]: (state, action) => {
      state.status = 'success';
      state.cryptos = [
        ...state.cryptos, action.payload.data,
      ];
    },

    [FetchCryptos.rejected]: (state) => {
      state.status = 'failure';
    },
  },
});

export default CryptoSlice.reducer;
