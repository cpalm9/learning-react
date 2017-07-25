import React, {Component} from 'react';
import { Panel, DropdownButton, MenuItem  } from 'react-bootstrap'
import './HelloWorld.css';

class HelloWorld extends Component {
    constructor(props){
        super(props);
        this.state = {greeting: 'Hello'};
        this.frenchify = this.frenchify.bind(this);
        this.reEnglish = this.reEnglish.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }

    frenchify() {
        this.setState({ greeting: 'Bonjour' });
    }

    reEnglish() {
        this.setState({greeting: 'Hello'});
    }

    removeGreeting() {
        this.props.removeGreeting(this.props.name);
    }

    render() {
        return (
            <Panel>
                <h3>{this.state.greeting} {this.props.name}!</h3>
                <DropdownButton title="Edit Person">
                    <MenuItem onClick={this.frenchify}>Frenchify!</MenuItem>
                    <MenuItem onClick={this.reEnglish}>English!</MenuItem>
                    <MenuItem onClick={this.removeGreeting}>Delete</MenuItem>
                </DropdownButton>
            </Panel>
        )
    }
}

export default HelloWorld;