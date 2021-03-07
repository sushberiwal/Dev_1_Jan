import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDPG4-V1MWmeG0c4Akl7X6qFm68Q4F-210",
    authDomain: "resume-builder-6e0b2.firebaseapp.com",
    projectId: "resume-builder-6e0b2",
    storageBucket: "resume-builder-6e0b2.appspot.com",
    messagingSenderId: "710845994357",
    appId: "1:710845994357:web:c1171b051aa1fc06b3ef3c"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);



export default {
    db : firebaseApp.firestore()
}
