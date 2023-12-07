import { configureStore } from '@reduxjs/toolkit'
import getCard from './getCard'

export const store = configureStore({
  reducer: {
    card: getCard,
  },
})