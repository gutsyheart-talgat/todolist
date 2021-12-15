import React from "react";
import style from '../main.module.css'

 function Todo({todo}){  
    function onToggle(id){
        if(todo.id === id){
            todo.completed = !todo.completed
        }
        console.log(todo.completed)
        
        return todo
    }
    
    return(
        <div className={todo.completed ? style.done : style.notDone}>
            <div className={style.todo} >
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

export default Todo





