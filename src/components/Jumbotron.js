import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap'
import './Jumbotron.css';

class Jumbo extends Component {
    render() {
        return (
            <Jumbotron>
                <h1>This is Chris's Cool React App!</h1>
            </Jumbotron>
        );
    }
}

export default Jumbo;