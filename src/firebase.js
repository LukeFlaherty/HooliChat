// config file for firebase

import firebase from "firebase";

// passing the config object
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBiwhDxKkOLHuwkC-OdbS6GtUaEEwoEdvc",
    authDomain: "messenger-b5472.firebaseapp.com",
    databaseURL: "https://messenger-b5472-default-rtdb.firebaseio.com",
    projectId: "messenger-b5472",
    storageBucket: "messenger-b5472.appspot.com",
    messagingSenderId: "894897027401",
    appId: "1:894897027401:web:70589e78103cd863044298",
    measurementId: "G-086PMPBKFY"  
});

// initialize this object
// firestore is where the database it
const db = firebaseApp.firestore();

// installing firebase via the terminal using this line
// sudo npm install -g firebase-tools
// bck-i-search: tool_
// firebase init
// npm run build


export default db;