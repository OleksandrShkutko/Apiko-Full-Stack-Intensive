import React, { Component } from 'react';

class AllPost extends Component {
  render() {    
    return(
      <div className="PostList">
        {this.props.search.slice( 0, this.props.number).map(item => <PostChild key={item.id} body={item.title} />)}
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