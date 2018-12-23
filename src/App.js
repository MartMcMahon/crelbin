import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { observer } from 'mobx-react';

import firebase from './firebase';
import { routes } from './routes';

import logo from './logo.svg';
import './App.scss';

class App extends Component {

  componentDidMount() {
    console.log('hello, mounted.');
    document.title = "Crelb.in Chat";
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('hello', user);
      } else {
        console.log('who are you?');
      }
    });
  }

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      }).catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
    console.log(firebase.auth().currentUser);
  }

  render() {
    return (
      <div>
        <div className="modal-root"> </div>
        <div className="App">
          <button
            onClick={this.loginWithGoogle} >
            login with google
          </button>
          <BrowserRouter>
            <div className="router">
              { routes.map((r, key) => <Route
                  exact path={r.path}
                  key={r.key}
                  component={r.component}
                  />
              ) }
            </div>
          </BrowserRouter>
        </div>
      </div>
      );
    }
  }

  export default observer( App );
