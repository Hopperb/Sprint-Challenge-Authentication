import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route path="/login" component={Login}></Route>
       
      </div>
    );
  }
}

export default App;

// <Route path="/signup" component={SignUp}></Route>
// <Route path="/jokes" component={Jokes}></Route>