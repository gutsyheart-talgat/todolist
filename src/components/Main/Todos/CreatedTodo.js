import React from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "../main.module.css";
import buck from "./buck.png";
import { deleteTodo, toggleTodo } from "../../../toolkit/todoSlice";
function CreatedTodo() {
  const Todos = useSelector((state) => state.toolkit.todos);
  console.log(Todos)
  const dispatch = useDispatch();
  return Todos.map((todo) => (
    <div className={style.todo} key={todo.id}>
      <div className={style.pad}>
        <h1 className={style.name}>{todo.title}</h1>
      </div>
      <div className={style.events}>
        <button
          onClick={() => {
            console.log();
            dispatch(deleteTodo(todo.id));
          }}
          className={style.btns}
        >
          <img src={buck} />
        </button>
        <input
        type='checkbox'
        checked={todo.completed}
        onChange={()=>dispatch(toggleTodo(todo.id))}/>
      </div>
    </div>
  ));
}
export default CreatedTodo;

/*return Todos.map(todo => <Todo todo={todo} key={todo.id}/>)*/
