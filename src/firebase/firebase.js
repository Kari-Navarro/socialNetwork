// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAbRchiGaGbJ8H_ImmmPWaaxaw41k86sUw',
  authDomain: 'social-network-c51da.firebaseapp.com',
  projectId: 'social-network-c51da',
  storageBucket: 'social-network-c51da.appspot.com',
  messagingSenderId: '828524831180',
  appId: '1:828524831180:web:10a06afa495be6370f7d69',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
