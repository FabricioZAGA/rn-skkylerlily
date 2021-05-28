import firebase from "firebase/app";
import firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB08HAfnaeIz-X_dnM4apemSMZEQ8B2IpQ",
  authDomain: "hcl-zgaf-firebase-01.firebaseapp.com",
  projectId: "hcl-zgaf-firebase-01",
  storageBucket: "hcl-zgaf-firebase-01.appspot.com",
  messagingSenderId: "787056712942",
  appId: "1:787056712942:web:70ebe50e1b1aba012867ff",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
