// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

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

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
