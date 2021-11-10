import {combineReducers} from 'redux'
import {appReducer} from './appReducer'
import  todosReducer  from './TodosReducer'

export const rootReducer = combineReducers({
    todos: todosReducer,
    app: appReducer
})