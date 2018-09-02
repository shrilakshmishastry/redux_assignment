import reducer from '../reducers/index.js';
import {createStore} from 'redux';
import {combineForms} from 'react-redux-form';
const intialState =
{
  isOpen: false,
  name : '',
  password:'',
  mobile_num:''
}

export const store = createStore(reducer,intialState);
