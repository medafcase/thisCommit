import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXjzrdNubxTsyrfcAbh6ffpb_Iy0p2md8",
  authDomain: "nikeoneone-2e890.firebaseapp.com",
  databaseURL: "https://nikeoneone-2e890.firebaseio.com",
  projectId: "nikeoneone-2e890",
  storageBucket: "nikeoneone-2e890.appspot.com",
  messagingSenderId: "918749138082",
  appId: "1:918749138082:web:0b8b5044bcf98541ae1bfb",
  measurementId: "G-XN6Q12L2KG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
