import React, { Component } from 'react';
import './App.css';
import AllPost from './components/AllPost.js';
import Button from './components/Button.js';
import Search from './components/Search.js';

const API = "https://jsonplaceholder.typicode.com/";
const fetchData = entity =>
  fetch(API + entity).then(response => response.json());

class App extends Component {
  constructor (){
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {number: 10, show: false, search: 0, postsapi: [],  isLoading: true, arrayFromSearch: []}
  }

  componentDidMount() {
    setTimeout(() => {
      fetchData("posts").then(
        postsapi => {
          this.setState({
            postsapi,
            isLoading: false,
            show: true,
            arrayFromSearch: postsapi
          });
        }
      );
    }, 2000);
  }
    
  render() {
    return (    
      <div className="App">
        <Search changeValue={this.handleSearch} />
        <AllPost number={this.state.number} search={this.state.arrayFromSearch} isLoading={this.state.isLoading} />
        {this.state.show && <Button changeNumber={this.handleClick} number={this.state.number}  />}
        {this.state.isLoading && <h3 className='loading'>Loading...</h3>}
      </div>
    )
  }

  handleClick() {
    this.setState({isLoading: true});
    setTimeout(() => {
      this.setState({isLoading: false}) 
      this.state.number + 10 >= this.state.arrayFromSearch.length ? this.setState({show: false}) : this.setState({show: true});
      this.setState({number: this.state.number + 10}); 
    }, 2000);
  }

  handleSearch = event => {
    const { value } = event.target;
    let searchResults = this.state.postsapi.filter( item => item.title.includes(value) )
    this.setState({arrayFromSearch: searchResults.length ? searchResults : this.state.arrayFromSearch });
    this.state.number >= searchResults.length ? this.setState({show: false}) : this.setState({show: true});
  };

}



export default App;
