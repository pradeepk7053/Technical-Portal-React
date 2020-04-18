import React, { useState } from 'react';
import {Link} from 'react-router-dom'

 
import {
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
NavLink,
UncontrolledDropdown,
DropdownToggle,
DropdownMenu,
DropdownItem,

} from 'reactstrap';

/*const sticky={"position":"relative","top":"0","width":"100%"}*/
const Header = (props) => {
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);



return (
   
    <div >
    <Navbar className="navbar navbar-dark bg-dark"  light expand="md" sticky="top">
        <NavbarBrand  tag={Link} to="/">TechZone</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="fixed" navbar>
                <NavItem >
                    <NavLink tag={Link} to="/SmartphoneCollections">Mobiles</NavLink>
                </NavItem>
            
                <NavItem >
                    <NavLink tag={Link} to="/Laptops">Laptops</NavLink>
                </NavItem>
                

                <NavItem >
                    <NavLink tag={Link} to="/News">News</NavLink>
                </NavItem>
                <NavItem >
                <NavLink tag={Link} to="/ContactUs">Contact Us</NavLink>
                </NavItem>


                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Credential
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem tag={Link} to="/SignIn">
                            Sign In
                        </DropdownItem>
                        <DropdownItem tag={Link} to="/SignUp">
                            Sign Up
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </Collapse>
    </Navbar>
    </div>
  
    
);
}
export default Header;