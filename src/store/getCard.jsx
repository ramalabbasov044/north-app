/* eslint-disable no-unused-expressions */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    count: 1,
}

export const getCard = createSlice({
    name: 'card',
    initialState,
    reducers: {
      setData: (state, action) => {
        state.data.push(action.payload)
      },
      setIncrementPrice: (state, action) => {
          const productIndex = action.payload

          const currentData = state.data.filter((item,i) => i === productIndex)

          if(currentData){
              state.data[productIndex].count += 1
          }
      },
      setDecrementPrice: (state, action) => {
        const productIndex = action.payload

          const currentData = state.data.filter((item,i) => i === productIndex)

          if(currentData){
              if(state.data[productIndex].count > 1){
                state.data[productIndex].count -= 1
              }
          }
      },
      deleteData: (state, action) => {
        state.data = action.payload
      }
      
    },
})

export const { setData , setIncrementPrice , setDecrementPrice , deleteData } = getCard.actions

export default getCard.reducer