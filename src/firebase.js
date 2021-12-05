import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";

  const firebaseConfig = {
    apiKey: "AIzaSyCqSlhtDutZKGCkaMybR2uwEQjER1V4qgg",
    authDomain: "react-contact-d55a3.firebaseapp.com",
    projectId: "react-contact-d55a3",
    storageBucket: "react-contact-d55a3.appspot.com",
    messagingSenderId: "169133796939",
    appId: "1:169133796939:web:3d0659f724f5f7575b67ce"
  };


  const reference  = firebase.initializeApp(firebaseConfig);

  export default reference.database().ref();