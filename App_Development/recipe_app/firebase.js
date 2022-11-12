import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCDKSOcVeW266hTMY4Q889eY606VoX31CA",
  authDomain: "technojam-a38ec.firebaseapp.com",
  projectId: "technojam-a38ec",
  storageBucket: "technojam-a38ec.appspot.com",
  messagingSenderId: "910543883157",
  appId: "1:910543883157:web:62259ede25894294a5c49c"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();


