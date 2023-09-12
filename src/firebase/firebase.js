// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbRchiGaGbJ8H_ImmmPWaaxaw41k86sUw",
  authDomain: "social-network-c51da.firebaseapp.com",
  projectId: "social-network-c51da",
  storageBucket: "social-network-c51da.appspot.com",
  messagingSenderId: "828524831180",
  appId: "1:828524831180:web:10a06afa495be6370f7d69",
  measurementId: "G-YTL6QR4E77"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);



// const analytics = getAnalytics(app);

export default  {db, auth};

