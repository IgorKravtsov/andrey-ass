import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import TodosReducer from './sliceToDo'
import cartReducer from './cartSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: TodosReducer,
    cart: cartReducer
  },
})