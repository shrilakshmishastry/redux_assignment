import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './home.js';
class Main extends React.Component{
  render(){
    return(
      <Route path='/' component={Home}/>
    );
  }
};
export default Main;
