import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {compose,createStore, applyMiddleware} from 'redux'
import  {rootReducer}  from './redux/rootReducer';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
  ,
))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

