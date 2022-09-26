// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjWwCODRKXHzoELlEe_cSsfn1BfnIYg9Q",
  authDomain: "coderhouse-ecommerce-f7339.firebaseapp.com",
  projectId: "coderhouse-ecommerce-f7339",
  storageBucket: "coderhouse-ecommerce-f7339.appspot.com",
  messagingSenderId: "49019646185",
  appId: "1:49019646185:web:57e8ef539f6d250d174078"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//base de datos
 export const db = getFirestore(app)