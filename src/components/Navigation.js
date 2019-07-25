import React, {Component} from 'react';
import nasa from './NASA_logo.svg';

class Navigation extends Component {
  render() {
    return (
      <div>
        <h1>Twitter 
            <img 
            src={nasa}
            height="60px" 
            width="60px"
            alt="nasa logo">
            </img> 
            Hashtag Results</h1>
      </div>
    )
  }
}

export default Navigation;