import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 100 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action) {
      state.value++
    },
    decrement(state, action) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer