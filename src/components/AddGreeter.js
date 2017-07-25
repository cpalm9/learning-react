import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap'
import './AddGreeter.css';

class AddGreeter extends Component {
    constructor(props){
        super(props);
        this.state = { greetingName: ''};
        this.handleUpdate = this.handleUpdate.bind(this);
        this.addGreeting = this.addGreeting.bind(this);
    }
    handleUpdate(event) {
        this.setState({greetingName: event.target.value});
    }
    addGreeting() {
        this.props.addGreeting(this.state.greetingName);
        this.setState({ greetingName: '' });
    }
    render() {
        return (
            <Panel>
                <input type="text" onChange={this.handleUpdate} value={this.state.greetingName}/>
                &nbsp;&nbsp;
                <Button bsStyle="primary" onClick={this.addGreeting}>Add</Button>
            </Panel>
        )
    }
}

export default AddGreeter;