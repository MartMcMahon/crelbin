import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { observer } from 'mobx-react';

import { routes } from './routes';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    console.log('hello, mounted.');
    document.title = "Crelb.in Chat";
    // login action
  }

  render() {
    return (
      <div>
        <div className="modal-root"> </div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <BrowserRouter>
            <div className="router">
              { routes.map(({path}, key) => (
                <Route exact path={path} key={key} />))
              }
            </div>
          </BrowserRouter>
        </div>
      </div>
      );
    }
  }

  export default observer( App );
