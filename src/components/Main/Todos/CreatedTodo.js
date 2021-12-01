import React,{Component} from "react";
import Todo from "./Todo";
import {connect} from 'react-redux'
import Created from "./Created"

class CreatedTodo extends Component{
  constructor(props){
    super(props);
    this.state = [this.props.Todos]
    this.deleteBtn = this.deleteBtn.bind(this);
  }
  deleteBtn(id){
    this.setState(
      this.state.filter(todo=>todo.id !== id)
    )
  }
  render(){
    return this.props.Todos.map((todo) => <Created deleteBtn={this.deleteBtn} key={todo.id} todo={todo} />);
  }
}
const mapStateToProps = state =>{
    
    return {
        Todos: state.todos.todos
    }
}

  
  export default connect(mapStateToProps, null)(CreatedTodo);

/*return Todos.map(todo => <Todo todo={todo} key={todo.id}/>)*/