const firebase = require('firebase');
// const admin = require('firebase-admin');

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBvYa80AdA6t4bWOdzwS6CT8C4x5XSSKjc",
  authDomain: "crelbinchat.firebaseapp.com",
  databaseURL: "https://crelbinchat.firebaseio.com",
  projectId: "crelbinchat",
  storageBucket: "crelbinchat.appspot.com",
  messagingSenderId: "672807797348"
};

firebase.initializeApp(config);
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://crelbinchat.firebaseio.com",
// });

// module.exports = { firebase, admin };
module.exports = firebase;
