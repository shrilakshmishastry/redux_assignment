import React,{Component} from 'react';
import Home from './home.js';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {store} from './store/index.js';
import setName from './actions/index.js';
import SetButton from './button.js';
import Main from './main.js';
import Header from './header.js';
class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Main/>
      </div>
        );
  }
}

export default App;
