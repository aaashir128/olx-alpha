import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9zdQRl8yRYuCiiLbt5sxxc-k34aYqojU",
  authDomain: "olx-alpha.firebaseapp.com",
  projectId: "olx-alpha",
  storageBucket: "olx-alpha.appspot.com",
  messagingSenderId: "528942017445",
  appId: "1:528942017445:web:0e4650fe63c12948bc164c",
  measurementId: "G-WC88M686Q6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage()

export { auth, storage };
export default db;
