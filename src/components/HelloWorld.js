import React, {Component} from 'react';
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
            <div className="HelloWorld">
                {this.state.greeting} {this.props.name}!
                <br/>
                <button onClick={this.frenchify}>Frenchify!</button>
                <br/>
                <button onClick={this.reEnglish}>English!</button>
                <br/>
                <button onClick={this.removeGreeting}>Delete</button>
            </div>
        )
    }
}

export default HelloWorld;