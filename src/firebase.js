import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "reactube-a9753.firebaseapp.com",
  projectId: "reactube-a9753",
  storageBucket: "reactube-a9753.appspot.com",
  messagingSenderId: "191712341156",
  appId: "1:191712341156:web:2ff5103052a8d394bd0a31",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
