import {   CREATE_TODO,  FETCH_TODOS , DELETE_TODO,TOGGLE_TODO} from "./types"

const initialState = {
    todos:[],
    fetchedtodos:[],
}
export default function todosReducer (state=initialState, action){
    switch(action.type){
        case CREATE_TODO:
            return{...state, todos: state.todos.concat([action.payload])}
            
        case FETCH_TODOS:
            return {...state, fetchedtodos:action.payload}
        default: return state
    }
    
}