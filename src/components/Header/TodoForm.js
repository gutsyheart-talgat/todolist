import React from "react";
import {connect} from 'react-redux'
import {createTodo} from '../../redux/action'
import style from './header.module.css'

class TodoForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title: ''
        }
    }
    submitHundler = ev =>{
        ev.preventDefault()
        const {title} = this.state
        const newTodo={
            title, id: Date.now().toString(),completed:false
        }
        this.props.createTodo(newTodo)
        this.setState({title:''})
    }
    changeInputHandler = ev =>{
        ev.persist()
        this.setState(prev=>({...prev, ...{
            [ev.target.name]:ev.target.value
        }}))
    }

    render(){
        return(
            <form onSubmit={this.submitHundler}>
                
                <div className="mb-3">
                    <input 
                    type="text"
                    id="title"
                    value={this.state.title}
                    name="title"
                    onChange={this.changeInputHandler}
                    className={style.input} 
                    placeholder="заголовок"/><br/>
                    
                    <button className={style.btn} type="submit">Создать новую задачу</button>
                    
                </div>
            </form>
        )

    }
}
const mapDispatchToProps ={
    createTodo

}

export default connect(null,mapDispatchToProps)(TodoForm)
