// aqui exportaras las funciones que necesites
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import { auth } from './firebase.js';

/* getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect,
getRedirectResult,signInWithEmailAndPassword, */

const loginWithGoogle = async () => {
  try {
    // Inicializamos googleAuth
    const provider = new GoogleAuthProvider();
    // Invocamos el modal de iniciar sesion con google
    const userCredential = await signInWithPopup(auth, provider);
    // console.log(userCredential.user);
    localStorage.setItem('user', userCredential);
    return userCredential;
  } catch (error) {
    return undefined;
  }
};

// const validateUserSession = () => {
//   // Detecta el estado de autentificación
//   // Este observador de firebase nos sirve para validar si el usuario ya habia iniciado sesion
//   // o ya se habia registrado, en este caso navegamos a feed.
//   onAuthStateChanged(auth, (user) => {
//   return user;
//   });
// };

function registrarConEmail(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

const updateOutput = (outputElement, message) => {
  if (outputElement) {
    outputElement.textContent = message;
  }
};

function loginUser(email, password, element) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      localStorage.setItem('user', userCredential);
    })
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
}

export {
  registrarConEmail, loginUser, loginWithGoogle,
};
