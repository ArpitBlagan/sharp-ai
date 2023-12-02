// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9RHs0OUYSdCa5l1TyYEAh0HuCTeR8yDo",
    authDomain: "fir-73aa9.firebaseapp.com",
    databaseURL: "https://fir-73aa9-default-rtdb.firebaseio.com",
    projectId: "fir-73aa9",
    storageBucket: "fir-73aa9.appspot.com",
    messagingSenderId: "237716303432",
    appId: "1:237716303432:web:52f4b20b5ca7b2e757727d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
export default db;