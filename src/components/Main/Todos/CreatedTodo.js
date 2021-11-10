import React,{Component} from "react";
import Todo from "./Todo";
import {connect} from 'react-redux'


class CreatedTodo extends Component {
    renderTodos = () =>
    this.props.Todos.map((todo) => <Todo  key={todo.id} todo={todo} />);

  render() {
    return <div>{this.renderTodos()}</div>;
  }
    
}

const mapStateToProps = state =>{
    console.log(state)
    return {
        Todos: state.todos.todos
    }
}

  
  export default connect(mapStateToProps, null)(CreatedTodo);

/*return Todos.map(todo => <Todo todo={todo} key={todo.id}/>)*/