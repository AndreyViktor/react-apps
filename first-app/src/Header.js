import React,{ useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler
  } from 'reactstrap';
  import {Link} from 'react-router-dom';
  
  
export default function Header(){
    const [open,setOpen] = useState(false);
    const toogle = ()=>{
      setOpen(!open);
    }
    return (
      <div>
         <Navbar color='light' light-expand='md' >
            <NavbarBrand tag={Link} to='/'>União Anarco capitalista</NavbarBrand>
            <NavbarToggler onClick={toogle}/>
             <Collapse isOpen={open} navbar>
              <Nav className='m1-auto' navbar>
                <NavItem>
                  <NavLink tag={Link} to='/'>Home</NavLink>
                  <NavLink tag={Link} to='/biblioteca'>Biblioteca</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
         </Navbar>
      </div>
    );
  }