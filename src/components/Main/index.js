import React from "react";
import style from './main.module.css';
import Todos from './Todos/index'

export default function Main (){
    
    return(
        <div className="container">
            <div className={style.main}>
                <p className={style.p}>СПИСОК ЗАДАЧ</p>
                <div >
                    <Todos/>
                </div>
            </div>

        </div>
    )
}