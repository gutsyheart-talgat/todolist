import React,{Component} from "react";
import Todo from "./Todo";
import {connect} from 'react-redux'
import Created from "./Created";


function CreatedTodo({Todos}){
  function DeleteBtn(id, todos=Todos){
    const [dlt, setDlt] = React.useState(todos)
    setDlt(
      dlt.filter(todo => todo.id !== id)
    )
    
  }
    
  
  return Todos.map((todo) => <Created DeleteBtn={DeleteBtn()} key={todo.id} todo={todo} />);


}
const mapStateToProps = state =>{
    console.log(state)
    return {
        Todos: state.todos.todos
    }
}

  
  export default connect(mapStateToProps, null)(CreatedTodo);

/*return Todos.map(todo => <Todo todo={todo} key={todo.id}/>)*/