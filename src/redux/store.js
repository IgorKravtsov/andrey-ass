import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import TodosReducer from './sliceToDo'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: TodosReducer
  },
})