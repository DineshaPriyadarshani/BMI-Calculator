import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';

class Header extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar className='navbar'>
                    <Nav>
                        <NavItem className='nav-link' to="/home">
                            <span className='fa fa-home fa-lg'></span> Home
                        </NavItem>
                        <NavItem className='nav-link' to="/calculator">
                            <span className='fa fa-calculator fa-lg'></span> Calculator
                        </NavItem>
                    </Nav>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;