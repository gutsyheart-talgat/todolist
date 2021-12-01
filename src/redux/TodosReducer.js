import {   CREATE_TODO,  FETCH_TODOS , DELETE_TODO,TOGGLE_TODO} from "./types"

const initialState = {
    todos:[],
    fetchedtodos:[],
    comp:false
}
export default function todosReducer (state=initialState, action){
    switch(action.type){
        case CREATE_TODO:
            return{...state, todos: state.todos.concat([action.payload])}
            
        case FETCH_TODOS:
            return {...state, fetchedtodos:action.payload}
        case DELETE_TODO:
            return {...state,todos: state.todos.filter((todo) => todo.id !== action.payload)}
        case TOGGLE_TODO:
            return{...state, comp:!state.comp}
        
        default: return state
    }
    
}