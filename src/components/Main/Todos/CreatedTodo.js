import React,{Component} from "react";
import Todo from "./Todo";
import {connect} from 'react-redux'
import Created from "./Created"

class CreatedTodo extends Component{
  constructor(props){
    super(props);
    this.state = [this.props.Todos]
  }
  
  render(){
    console.log(this.props.Todos)
    return this.props.Todos.map((todo) => <Created key={todo.id} todo={todo} />);
  }
}
const mapStateToProps = state =>{
    
    return {
        Todos: state.todos.todos
    }
}

  
  export default connect(mapStateToProps, null)(CreatedTodo);

/*return Todos.map(todo => <Todo todo={todo} key={todo.id}/>)*/