// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKwii4Q1IlVuJtd0n4cO_D1S33t6b_l4I",
  authDomain: "mytodolist-229.firebaseapp.com",
  projectId: "mytodolist-229",
  storageBucket: "mytodolist-229.appspot.com",
  messagingSenderId: "398418368487",
  appId: "1:398418368487:web:055db0b3f21ab5eccccf42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
	db
}