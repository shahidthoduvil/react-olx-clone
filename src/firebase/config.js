
import firebase from "firebase";
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBcrpKTPTY8Hvlp2QjCSjICNb4ttcWBI1I",
  authDomain: "olx-clone-10342.firebaseapp.com",
  projectId: "olx-clone-10342",
  storageBucket: "olx-clone-10342.appspot.com",
  messagingSenderId: "850302127068",
  appId: "1:850302127068:web:3863debe2870c5f9015d19",
  measurementId: "G-KWSLTLBHGY"
};
export default firebase.initializeApp(firebaseConfig)
