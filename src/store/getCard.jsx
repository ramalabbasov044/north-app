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
      setIncrementPrice: (state) => {
        state.count += 1
      },
      setDecrementPrice: (state) => {
        if(state.count > 1){
            state.count -= 1
        }else{
            console.log("a");
        }
      },
      
    },
})

export const { setData , setIncrementPrice , setDecrementPrice } = getCard.actions

export default getCard.reducer