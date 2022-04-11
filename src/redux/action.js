import {  CREATE_TODO,  DELETE_TODO,  FETCH_TODOS,HIDE_LOADER, SHOW_LOADER,TOGGLE_TODO } from "./types";

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
export function deleteTodo(id){
    return{
        type:DELETE_TODO
        
    }
}





