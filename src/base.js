import Rebase from 're-base';
import firebase from 'firebase/app';
import database from 'firebase/database';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAI6ca-UwXghOqqVM-CqvJxoD2FkX5QwzI',
  authDomain: 'portfolio-8b929.firebaseapp.com',
  databaseURL: 'https://portfolio-8b929.firebaseio.com',
  projectId: 'portfolio-8b929',
  storageBucket: 'portfolio-8b929.appspot.com',
  messagingSenderId: '923876063028'
});

const db = firebase.database(app);

export default Rebase.createClass(db);
