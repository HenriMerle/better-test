import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#FFF'
};
let fakeServerData = {
  user: {
    name: 'Henri',
    playlists: [
      {
        name: 'My Favorite',
        songs: [
          {name: 'Fast Car', duration: 325},
          {name: 'Home', duration: 185},
          {name: 'Levels', duration: 687},
          {name: 'Good Feeling', duration: 422}
        ]
      },
      {
        name: 'Discover',
        songs: [
          {name: 'Fast Car', duration: 325},
          {name: 'Home', duration: 185},
          {name: 'Levels', duration: 687},
          {name: 'Good Feeling', duration: 422}
        ]
      },
      {
        name: 'Top Charts',
        songs: [
          {name: 'Fast Car', duration: 325},
          {name: 'Home', duration: 185},
          {name: 'Levels', duration: 687},
          {name: 'Good Feeling', duration: 422}
        ]
      },
      {
        name: 'Weekly',
        songs: [
          {name: 'Fast Car', duration: 325},
          {name: 'Home', duration: 185},
          {name: 'Levels', duration: 687},
          {name: 'Good Feeling', duration: 422}
        ]
      },
    ]
  }
};

class PlaylistCounter extends Component {
  render() {
    return(
      <div style={{...defaultStyle, 'width': '40%', 'display': 'inline-block'}}>
        <h2>{this.props.playlists.length} Playlists</h2>
      </div>
    );
  }
}

class TimeCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) =>{
      return songs.concat(eachPlaylist.songs);
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return(
      <div style={{...defaultStyle, 'width': '40%', 'display': 'inline-block'}}>
        <h2>{Math.floor(totalDuration/60)} Minutes</h2>
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
        <h3>{this.props.playlist.name}</h3>
        <ul>
        {this.props.playlist.songs.map(song =>
          <li>{song.name}</li>
        )}
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {serverData: {}}
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 1000);
  }

  render() {
    return (
      <div className="App">
      {this.state.serverData.user ?
        <div>
          <h1 style={{...defaultStyle, 'font-size': '54px'}}>{this.state.serverData.user.name}'s Playlists</h1>
          <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
          <TimeCounter playlists={this.state.serverData.user.playlists}/>
          <Filter/>
          {this.state.serverData.user.playlists.map(playlist => 
            <Playlist playlist={playlist}/>
          )}
        </div> : <h5 style={defaultStyle}>Loading...</h5>
      }
      </div>
    );
  }
}

export default App;