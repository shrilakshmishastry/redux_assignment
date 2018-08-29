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

const  Header = ()=>{
  return(
    <div className="fixed-bottom">
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>ReduxBank
        </NavbarBrand>
        <NavbarToggler  />
        <Collapse  navbar>
            <Nav className='ml-auto' navbar >
              <NavItem>
                <Link to='/'>Home
                </Link>
              </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Header;
