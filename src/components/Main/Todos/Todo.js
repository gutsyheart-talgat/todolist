import React from "react";
import style from '../main.module.css'
import img from './buck.png'
import { deleteTodo } from "../../../redux/action";



 function Todo({todo}){  
    function onToggle(id){
        if(todo.id === id){
            todo.completed = !todo.completed
        }
        console.log(todo.completed)
        
        return todo
    }
    
    return(
        <div >
            <div className={style.todo} >
                <div className={style.pad}>
                    <h1 className={style.name}>{todo.title}</h1>
                </div>
                <div className={style.btns}>
                    <input 
                    
                    onChange={()=>onToggle(todo.id)}
                    type="checkbox"
                    />
                    <btn ><img src={img}/></btn>
                </div>
            </div>
        </div>
    )
}

export default Todo





