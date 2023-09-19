// aqui exportaras las funciones que necesites
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase.js';

/* getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect,
getRedirectResult,signInWithEmailAndPassword, */

const updateOutput = (outputElement, message) => {
  if (outputElement) {
    outputElement.textContent = message;
  }
};
//const loginWithGoogle = new GoogleAuthProvider();

function registrarConEmail(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

const loginUser = (email, password, element) => signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => userCredential)
  .catch((error) => {
    const errorCode = error.code;
    if (errorCode === 'auth/invalid-email') {
      const message = 'The email is not valid.';
      updateOutput(element, message);
    } else if (errorCode === 'auth/user-disabled') {
      const message = 'User has been disabled.';
      updateOutput(element, message);
    } else if (errorCode === 'auth/user-not-found') {
      const message = 'User not found';
      updateOutput(element, message);
    } else if (errorCode === 'auth/wrong-password') {
      const message = 'Wrong password';
      updateOutput(element, message);
    }
  });

export { registrarConEmail, loginUser };
