import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Nav extends Component {
    render() {
        return (
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              Chris's React App
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        );
    }
}

export default Nav;