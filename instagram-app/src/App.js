import React from 'react';
import './App.css';
import dummyData from './dummy-data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    }
  }
  
  
  render() {
    return (
    <div className="App">
        Howdy
    </div>
    )
  }
}

export default App;
