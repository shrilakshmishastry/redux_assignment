import React,{Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDom from 'react-dom';
import App from './js/App.js';
import {createStore} from 'redux';
import reducer from './js/reducers/index.js';
import {Provider} from 'react-redux';



ReactDom.render(
  (

    <BrowserRouter>
      <App/>
    </BrowserRouter>

  ),
  document.getElementById('root')
);
