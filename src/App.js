import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

import { createAction } from './actions/userAction';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  createAction: () => dispatch(createAction())
})

class App extends Component {

  createAction = (event) => {
    this.props.createAction();
    console.log('create action');
  }

  test = () => {
    console.log("test");
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.createAction}>Test redux action</p>
          <p onClick={this.test}>Test sipmle</p>
          <pre>
          {
            JSON.stringify(this.props)
          }
          </pre>
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
