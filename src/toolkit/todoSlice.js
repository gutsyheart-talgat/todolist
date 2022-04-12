import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name:"todo",
    initialState:{
        todos:[
            {id:1,title:"Ula Looh", completed:false}
        ]
    },
    reducers:{
        createTodo(state,action){
            state.todos.push(action.payload)
        },
        deleteTodo(state,action){
            state.todos = state.todos.filter(todo=>todo.id !== action.payload)
        },
        toggleTodo(state,action){
            const toggle = state.todos.find(todo=>todo.id === action.payload)
            toggle.completed = !toggle.completed
        }
    }
})
export default toolkitSlice.reducer
export const {createTodo , deleteTodo,toggleTodo } = toolkitSlice.actions