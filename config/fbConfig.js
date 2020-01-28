import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyCva8VOEjAm4nbCk2xKUNhEFrf3TPKlhE0",
    authDomain: "marioplan-4dadb.firebaseapp.com",
    databaseURL: "https://marioplan-4dadb.firebaseio.com",
    projectId: "marioplan-4dadb",
    storageBucket: "marioplan-4dadb.appspot.com",
    messagingSenderId: "998970533845",
    appId: "1:998970533845:web:3df93cdfad5526ea54ff5c",
    measurementId: "G-BH3M88G7FF"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  // firebase.firestore(); // We don't need this anymore because we create firestore in index.js
  
  export default firebase;