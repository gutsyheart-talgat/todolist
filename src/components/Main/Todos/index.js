import React from "react";
import FetchedTodo from "./FetchedTodo";
import style from '../main.module.css'
import CreatedTodo from "./CreatedTodo";

export default function(){
    return (
    <div className={style.todos}>
        <CreatedTodo/>
    </div>
    )
}