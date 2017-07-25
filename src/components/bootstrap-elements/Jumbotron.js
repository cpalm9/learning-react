import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap'
import './Jumbotron.css';

class Jumbo extends Component {
    render() {
        return (
            <Jumbotron>
                <h2>Wow! What a cool app!</h2>
            </Jumbotron>
        );
    }
}

export default Jumbo;