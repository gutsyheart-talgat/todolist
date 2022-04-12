import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../../toolkit/todoSlice";
import style from "./header.module.css";

export default function TodoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const submitHundler = (ev) => {
    ev.preventDefault();
    const newTodo = {
      title: title,
      id: Date.now().toString(),
      completed: false,
    };
    dispatch(createTodo(newTodo));
    setTitle('')
  };
  const changeInputHandler = (e) => {
    setTitle(e.target.value);
  };
  return (
    <form onSubmit={ev=>submitHundler(ev)}>
      <div className="mb-3">
        <input
          type="text"
          id="title"
          value={title}
          name="title"
          onChange={e=>changeInputHandler(e)}
          className={style.input}
          placeholder="заголовок"
        />
        <br />
        <button className={style.btn} type="submit">
          Создать новую задачу
        </button>
      </div>
    </form>
  );
}
