import React, {Component} from 'react';
import HashtagResults from './components/HashtagResults';
import Navigation from './components/Navigation';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navigation />
        <HashtagResults />        
      </div>
    )
  }
}

export default App;
