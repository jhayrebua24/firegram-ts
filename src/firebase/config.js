import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDKzWoFv8UD-EiYzSOtVQZdQyv1qvqzx3U',
  authDomain: 'firegram-7aafb.firebaseapp.com',
  databaseURL: 'https://firegram-7aafb.firebaseio.com',
  projectId: 'firegram-7aafb',
  storageBucket: 'firegram-7aafb.appspot.com',
  messagingSenderId: '773727826070',
  appId: '1:773727826070:web:d39215739b3519b716d2b7',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
