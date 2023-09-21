// boton de google

import { loginUser, loginWithGoogle } from '../firebase/auth.js';

function login(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonLogin = document.createElement('button');
  const buttonGoogle = document.createElement('button');

  inputEmail.placeholder = 'Write email';
  inputEmail.type = 'email';
  inputPass.placeholder = 'Password';
  inputPass.type = 'password';

  title.textContent = 'login';
  buttonLogin.textContent = 'Login';
  buttonGoogle.textContent = 'Google';

  buttonReturn.textContent = 'Return to home';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  buttonGoogle.addEventListener('click', async () => {
    // Invocamos a la funcion loginWithGoogle que abre el popup de google
    const user = await loginWithGoogle();
    if (user !== undefined) {
      navigateTo('/dogform');
    }
  });

  form.addEventListener('submit', () => {
    loginUser(inputEmail.value, inputPass.value);
  });

  form.append(inputEmail, inputPass, buttonLogin);
  section.append(title, form, buttonReturn, buttonGoogle);

  return section;
}
export default login;
