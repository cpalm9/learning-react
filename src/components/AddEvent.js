import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap'
import './AddEvent.css';

class AddEvent extends Component {
    constructor(props){
        super(props);
        this.state = { hour: '', description: '' };
        this.handleHourUpdate = this.handleHourUpdate.bind(this);
        this.handleDescUpdate = this.handleDescUpdate.bind(this);
        this.AddEvent = this.AddEvent.bind(this);
    }
    handleHourUpdate(event) {
        this.setState({ hour: event.target.value});
    }
    handleDescUpdate(event) {
        this.setState({ description: event.target.desc});
    }
    AddEvent() {
        this.props.AddEvent(this.state.hour, this.state.description);
        console.log(this.state.hour)
        this.setState({ hour: '', description: '' });
    }
    render() {
        return (
            <Panel>
                <input type="text" placeholder="Hours..." name="hour" onChange={this.handleHourUpdate} value={this.state.hour}/>
                &nbsp;&nbsp;
                <input type="text" placeholder="Description..." name="desc" onChange={this.handleDescUpdate} value={this.state.description}/>
                &nbsp;&nbsp;
                <Button bsStyle="primary" onClick={this.AddEvent}>Add Event</Button>
            </Panel>
        )
    }
}

export default AddEvent;