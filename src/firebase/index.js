// aqui exportaras las funciones que necesites
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js';

/* getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect,
getRedirectResult,signInWithEmailAndPassword, */

function registrarConEmail(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

/* signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  }); */

export { registrarConEmail };
