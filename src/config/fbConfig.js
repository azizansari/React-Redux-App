import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDHPPHDItBGiaQDax0hwObldxzAWg7dM7s",
    authDomain: "react-redux-app-d6d1a.firebaseapp.com",
    projectId: "react-redux-app-d6d1a",
    storageBucket: "react-redux-app-d6d1a.appspot.com",
    messagingSenderId: "1059113535648",
    appId: "1:1059113535648:web:5efcd274720883b916a1c5",
    measurementId: "G-DWJV5SSN9P"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})
export default firebase;