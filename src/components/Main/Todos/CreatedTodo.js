import React from "react";
import Todo from "./Todo";
import {connect} from 'react-redux'


function CreatedTodo ({Todos}){
    
    return Todos.map(todo => <Todo todo={todo} key={todo.id}/>)
}

const mapStateToProps = state =>{
    console.log(state)
    return {
        Todos: state.todos.todos
    }
}
export default connect(mapStateToProps, null)(CreatedTodo)