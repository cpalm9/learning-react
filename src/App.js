import React from 'react';
import HelloWorld from './components/HelloWorld';
import HelloWorldList from './components/HelloWorldList';
import Jumbo from './components/bootstrap-elements/Jumbotron';
import Nav from './components/bootstrap-elements/Nav';

const App = () => {
  return (
      <div className="App">
        <Nav/>
        <Jumbo/>
        <HelloWorldList/>
      </div>
  );
}

export default App;