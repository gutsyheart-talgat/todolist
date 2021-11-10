import React from "react";
import style from '../main.module.css'
import img from './buck.png'

import {useDispatch} from 'react-redux'


 function Todo({todo}){
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
                <btn ><img src={img}/></btn>
            </div>
        </div>
    )
}

export default Todo





