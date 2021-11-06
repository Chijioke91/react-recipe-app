import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBPjAkS47dkaHEAhIVd-G3hEtp05tW0Yug',
  authDomain: 'recipe-app-5aa61.firebaseapp.com',
  projectId: 'recipe-app-5aa61',
  storageBucket: 'recipe-app-5aa61.appspot.com',
  messagingSenderId: '482837447650',
  appId: '1:482837447650:web:8dcad91f6bd1c69a366fbb',
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize services
const db = firebase.firestore();

export { db };
