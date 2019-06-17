import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

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
        <PostContainer data={this.state.data} key={this.state.data.id} />
    </div>
    )
  }
}

export default App;
