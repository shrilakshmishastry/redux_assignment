import React,{Component} from 'react';
import {createStore} from 'redux';
import Home from './home.js';
import reducer from './reducers/index.js';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
const intialState =
{
  name:'shrilakshmi'
}

const store = createStore(reducer,intialState);

class App extends React.Component{
  render(){
    return(
        <Home tech={store.getState().name}/>
    );

  }
}

export default App;
