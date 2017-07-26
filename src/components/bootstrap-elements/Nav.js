import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import './Nav.css'

class Nav extends Component {
    render() {
        return (
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              Time Logger
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        );
    }
}

export default Nav;