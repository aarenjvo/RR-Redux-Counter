import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './Components/todoSlice'

export const store = configureStore({
    reducer: {
        // counter: counterReducer,
        todos: todoReducer
    }
})