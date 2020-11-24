import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCTLoLiJYX-HT65RZkJcNbNAINxTR0cRMQ",
  authDomain: "twitter-react-36484.firebaseapp.com",
  databaseURL: "https://twitter-react-36484.firebaseio.com",
  projectId: "twitter-react-36484",
  storageBucket: "twitter-react-36484.appspot.com",
  messagingSenderId: "1037729598614",
  appId: "1:1037729598614:web:b0eda65c4c3fbe2ddd86b7",
};

const appTwitter = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = appTwitter.firestore();
const auth = appTwitter.auth();
const storage = appTwitter.storage();

export { db, auth, storage };
