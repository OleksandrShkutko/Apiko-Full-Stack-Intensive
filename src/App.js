import React, { Component } from 'react';
import './App.css';
import AllPost from './components/AllPost.js';
import Button from './components/Button.js';
import posts from './components/data.json';

class App extends Component {
  constructor (){
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {number: 10, show: true}
  }
    
  render() {
    return (
      <div className="App">
        <AllPost number={this.state.number} />
        {this.state.show && <Button changeNumber={this.handleClick} number={this.state.number} />}
      </div>
    )
  }

  handleClick() {
    if(this.state.number + 10 >= posts.length) this.setState({show: false})
    this.setState({number: this.state.number + 10})
  }

}

export default App;
