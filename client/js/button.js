import React,{Component} from 'react';
import {store} from './store/index.js';
import setName from './actions/index.js';
const SetButton = ({name}) => (
  <div>
    {
      name.map((name,i)=>(
      <button className='btn btn-primary'
      key={name} data-tech={name}
      onClick={dispatchBtnAction}>
      {name}
      </button>
    )
      )
    }
  </div>
);
const dispatchBtnAction = (e)=>{
  const name = e.target.dataset.tech;
  console.log(name);
  store.dispatch(setName(name));
}
export default SetButton;
