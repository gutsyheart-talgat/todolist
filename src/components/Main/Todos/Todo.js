import React from "react";
import style from '../main.module.css'
import img from './buck.png'
import { deleteTodo } from "../../../redux/action";

import {useDispatch} from 'react-redux'


 function Todo({todo, deleteTodo}){
    const dispatch = useDispatch()
    
    return(
        <div className={style.todo}>
            <div className={style.pad}>
                <h1 className={style.name}>{todo.title}</h1>
            </div>
            <div className={style.btns}>
                <input 
                
                
                type="checkbox"
                />
                <btn onClick={()=>dispatch(deleteTodo(todo.id))}><img src={img}/></btn>
            </div>
        </div>
    )
}

export default Todo





