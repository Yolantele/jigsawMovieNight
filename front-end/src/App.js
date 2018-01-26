import React, { Component } from 'react';
import logo from './logo.svg';
import Movies from './components/Movies/Movies';
import './App.css';



class App extends Component {

  render() {

    // const movies = () => <Movies />
    // console.log(movies);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h1 className="App-title"></h1>
          // {movies}
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App;
// export default connect(null, actions)(App);
