import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#FFF'
};
let fakeServerData = {
  user: {
    name: 'Henri',
  }
};

class Information extends Component {
  render() {
    return(
      <div style={{...defaultStyle, 'display': 'inline-block'}}>
        <h2>Text Number</h2>
      </div>
    );
  }
}

class Filter extends Component{
  render() {
    return(
      <div style={defaultStyle}>
        <img/>
        <input type="text" placeholder="Filter"/>
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return(
      <div style={{...defaultStyle, 'display': 'inline-block', 'width': '25%'}}>
        <img/>
        <h3>Playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li><li>Song 4</li></ul>
      </div>
    );
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 style={{...defaultStyle, 'font-size': '54px'}}>{fakeServerData.user.name}'s Playlists</h1>
        <Information/>
        <Information/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;