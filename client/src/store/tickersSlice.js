import { createSlice } from "@reduxjs/toolkit";

export const tickersSlice = createSlice({
  name: "tickers",
  initialState: { data: [] },
  reducers: {
    setTickers: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setTickers } = tickersSlice.actions;

export default tickersSlice.reducer;
