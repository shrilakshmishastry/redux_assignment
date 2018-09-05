import React,{Component} from 'react';
import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import {store} from './store/index.js';
import setToggler from './actions/index.js';

const  Header = ()=>{
    console.log(store.getState().isOpen);
  return(
      <div className="fixed-bottom">
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>ReduxBank
        </NavbarBrand>
        <NavbarToggler onClick={dispatch_toggle}  />
        <Collapse isOpen={store.getState().isOpen} navbar>
            <Nav className='ml-auto' navbar >
              <NavItem>
                <Link to='/'>Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to='/create_account' className="ml-md-3">Create-Account
                </Link>
              </NavItem>
              <NavItem className='ml-md-3'>
                <Link to='/add_money'>
                    Creditmoney
                </Link>
              </NavItem>
              <NavItem className='ml-md-3'>
                <Link to='/withdraw_money'>
                    Withdraw money
                </Link>
              </NavItem>
            <NavItem className='ml-md-3'>
              <Link to='/balance'>Balance
              </Link>
            </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

const dispatch_toggle = (e) =>{
    const open = !store.getState().isOpen;
    store.dispatch(setToggler(open));
}
export default Header;
