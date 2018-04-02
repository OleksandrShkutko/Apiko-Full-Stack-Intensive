import React, { Component } from 'react';
import './App.css';
import AllPost from './components/AllPost.js';
import Button from './components/Button.js';
import Search from './components/Search.js';
import posts from './components/data.json';

class App extends Component {
  constructor (){
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {number: 10, show: true, search: 0, arrayFromSearch: posts}
  }
    
  render() {
    return (
      <div className="App">
        <Search changeValue={this.handleSearch} />
        <AllPost number={this.state.number} search={this.state.arrayFromSearch} />
        {this.state.show && <Button changeNumber={this.handleClick} number={this.state.number} />}
      </div>
    )
  }

  handleClick() {
    this.state.number + 10 >= this.state.arrayFromSearch.length ? this.setState({show: false}) : this.setState({show: true});
    this.setState({number: this.state.number + 10});
  }

  handleSearch = event => {
    const { value } = event.target;
    let searchResults = posts.filter( item => item.title.includes(value) )
    this.setState({arrayFromSearch: searchResults.length ? searchResults : posts });
    this.state.number >= searchResults.length ? this.setState({show: false}) : this.setState({show: true});
  };

}



export default App;
