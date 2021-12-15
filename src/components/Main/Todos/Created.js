import React from "react";
import { useDispatch } from "react-redux";
import style from '../main.module.css'

 function Created({todo}){
     console.log(todo.completed)
     function onToggle(id){
        if(todo.id === id){
            todo.completed = !todo.completed
        }
        console.log(todo.completed)
        return todo
    }
    const comp = todo.completed
    
    return(
        <div className={comp ? style.done : style.not}>
            <div className={style.todo}>
                <div className={style.pad}>
                    <h1 className={style.name}>{todo.title}</h1>
                </div>
                <div className={style.btns}>
                    <input 
                    onChange={()=>onToggle(todo.id)}
                    type="checkbox"
                    />
                </div>
            </div>
        </div>
    )
}

export default Created





