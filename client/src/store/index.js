import { configureStore } from '@reduxjs/toolkit'
import tickersReducer from './tickersSlice'

export const store = configureStore({
  reducer: {
    tickers: tickersReducer
  }
})
