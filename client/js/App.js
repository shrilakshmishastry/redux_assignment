import React,{Component} from 'react';
import Home from './home.js';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import store from './store/index.js';

class App extends React.Component{
  render(){
    return(
        <Home tech={store.getState().name}/>
    );

  }
}

export default App;
