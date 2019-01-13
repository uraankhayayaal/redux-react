import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

import { createAction } from './actions/userAction';
import { clearAction } from './actions/userAction';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  createAction: () => dispatch(createAction()),
  clearAction: () => dispatch(clearAction())
})

class App extends Component {

  createAction = (event) => {
    this.props.createAction();
    console.log('create action');
  }

  clearAction = (event) => {
    this.props.clearAction();
    console.log('clear action');
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.createAction}>Test redux action</button>
          <button onClick={this.clearAction}>Clear</button>
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
