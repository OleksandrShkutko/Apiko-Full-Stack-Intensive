import React, { Component } from 'react';
import posts from './data.json';

class AllPost extends Component {
  render() {    
    return(
      <div className="PostList">
        {posts.slice( 0, this.props.number).map(item => <PostChild key={item.id} body={item.body} />)}
      </div>
    )  
  }
}

class PostChild extends Component {
  render() {
    return <p className="PostListItem"> {this.props.body} </p>;
  }
}

export default AllPost;