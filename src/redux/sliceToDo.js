import { createSlice } from '@reduxjs/toolkit'


const igor = {todosvalue: []};

const ToDoS = createSlice ({
    name: 'todosvalue',
    initialState: igor,
    reducers: {
      setTodos(state, action) {
        state.todosvalue = action.payload
      }
    }
})

export const {setTodos} = ToDoS.actions
export default ToDoS.reducer