import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './home.js';
import Add_money from './add_money.js';
class Main extends React.Component{
  render(){
    return(
      <Switch>
        <Route path='/add_money' component={Add_money}/>
        <Route path='/' component={Home}/>
      </Switch>

    );
  }
};
export default Main;
