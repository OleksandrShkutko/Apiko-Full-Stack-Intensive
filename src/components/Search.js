import React, { Component } from 'react';

class Search extends Component {
  render(){
    return <input className='search' onChange={this.props.changeValue} placeholder="Search..."/>
  }
}

export default Search