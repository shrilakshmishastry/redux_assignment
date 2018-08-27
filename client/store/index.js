import reducer from '../reducers/index.js';
import {createStore} from 'redux';
const intialState =
{
  name:'shrilakshmi'
}

export const store = createStore(reducer,intialState);
