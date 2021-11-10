import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../../../redux/action";
import Todo from "./Todo";

export default function FetchedTodo(){
    const dispatch = useDispatch()
    
    const todos = useSelector(state => state.todos.fetchedtodos)
    const load = useSelector(state => state.app.load)
    if(load){
        return (
            <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }
    
    if(!todos.length){
        return (
            <button 
                className="btn btn-primary"
                onClick={()=>dispatch(fetchTodo())}
                >download
            </button>
        )
    }
    
    return(
        
        todos.map(todo => <Todo todo={todo} key={todo.id}/>)
    )
    
}