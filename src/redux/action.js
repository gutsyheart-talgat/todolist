import { COMPLETE_TODO, CREATE_TODO, DELETE_TODO, FETCH_TODOS,HIDE_LOADER, SHOW_LOADER } from "./types";

export function createTodo(todo){
    return{
        type:CREATE_TODO,
        payload:todo
    }
}
export function showLoader(){
    return{
        type: SHOW_LOADER
    }
}
export function hideLoader(){
    return{
        type: HIDE_LOADER
    }
}






export function fetchTodo(){
    return async dispatch => {
        dispatch(showLoader())
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=6')
            const json = await response.json()
            setTimeout(()=>{
                dispatch({type:FETCH_TODOS, payload:json})
                dispatch(hideLoader())
            },500)

        
        
    }
}