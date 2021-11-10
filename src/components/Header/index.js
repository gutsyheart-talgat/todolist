import React from "react";
import style from "./header.module.css"
import TodoForm from "./TodoForm";



export default function Header (){
    return (
        <div className="container">
            <div className={style.head}>
                <div >
                    <h1 className={style.h1}>TODOLIST</h1>
                    <p className={style.p}>BY TALGAT DZHAILIKEEV</p>
                </div>
                <div>
                    <TodoForm/>
                    
                </div>
            </div>
        </div>
    )
}