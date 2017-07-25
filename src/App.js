import React from 'react';
import HelloWorld from './components/HelloWorld';
import HelloWorldList from './components/HelloWorldList';
import Jumbo from './components/Jumbotron';

const App = () => {
  return (
      <div className="App">
        <Jumbo/>
        <HelloWorldList/>
      </div>
  );
}

export default App;