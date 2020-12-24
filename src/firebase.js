// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAd7j8wQmqD8TmMcnWEQeRntAuZ6rW-ses",
    authDomain: "react-redux-linkedin-clone.firebaseapp.com",
    projectId: "react-redux-linkedin-clone",
    storageBucket: "react-redux-linkedin-clone.appspot.com",
    messagingSenderId: "64856916611",
    appId: "1:64856916611:web:83da2b35b0f86953bd11b6",
    measurementId: "G-R1HLS3BFGF"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {db,auth};