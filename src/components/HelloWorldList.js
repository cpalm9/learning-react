import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import AddEvent from './AddEvent';

class HelloWorldList extends Component {

    constructor(props) {
        super(props);
        this.state = { events: [] };
        this.AddEvent = this.AddEvent.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }

    renderGreetings() {
        return this.state.events.map(name => (
            <HelloWorld key={name} name={name} removeGreeting={this.removeGreeting}/>
        ));
    }

    AddEvent(newHour,newDesc) {
        this.setState({ events: [newHour, newDesc] });
    }

    removeGreeting(removeName) {
        const filteredGreetings = this.state.events.filter(name => {
            return name !== removeName;
        });
        this.setState({ events: filteredGreetings });
    }

    render() {
        return (
            <div className="HelloWorldList">
                <AddEvent AddEvent={this.AddEvent}/>
                {this.renderGreetings()}
            </div>
        )
    }
}

export default HelloWorldList;