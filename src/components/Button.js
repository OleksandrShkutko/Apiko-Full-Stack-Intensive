import React, { Component } from 'react';
import '../App.css';

class Button extends Component {
  render(){
    return(
      <div className="MoreButton" onClick={this.props.changeNumber} >See more</div>
    )
  }
}

export default Button;