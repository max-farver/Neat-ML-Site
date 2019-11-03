import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyBI4jY-YxsYnzYQdGwbgJbavmxTf_dEtDk',
  authDomain: 'neat-p.firebaseapp.com',
  databaseURL: 'https://neat-p.firebaseio.com'
  // projectId: 'neat-p',
  // storageBucket: 'neat-p.appspot.com',
  // messagingSenderId: '963165542271',
  // appId: '1:963165542271:web:0a5adaab88e18cfea2ec4a'
});

export { firebaseConfig as firebase };
