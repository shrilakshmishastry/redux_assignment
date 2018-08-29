import React,{Component} from 'react';
import Home from './home.js';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {store} from './store/index.js';
import setName from './actions/index.js';
import SetButton from './button.js';
class App extends React.Component{
  render(){
    return(
      <Home  key={1} tech={store.getState().name}/>,
      <SetButton key={2} name={["shrilakshmi","ShriHari"]}/>

    );
  }
}

export default App;
