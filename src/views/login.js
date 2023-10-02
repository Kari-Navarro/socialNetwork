// boton de google

import { loginUser, loginWithGoogle } from '../firebase/auth.js';
import logo from './logo.png';

function login(navigateTo) {
  const section = document.createElement('section');
  section.classList.add('sectionLogin');
  const title = document.createElement('h2');
  title.classList.add('titleLogin');
  const buttonReturn = document.createElement('button');
  buttonReturn.classList.add('buttonReturnLogin');
  const form = document.createElement('form');
  form.classList.add('formLogin');
  const inputEmail = document.createElement('input');
  inputEmail.classList.add('inputEmail');
  const inputPass = document.createElement('input');
  inputPass.classList.add('inputPassword');
  const buttonLogin = document.createElement('button');
  const buttonGoogle = document.createElement('button');
  const divButtonsLogin = document.createElement('div');
  divButtonsLogin.classList.add('divs-buttons');

  inputEmail.placeholder = 'Write email';
  inputEmail.type = 'email';
  inputPass.placeholder = 'Password';
  inputPass.type = 'password';

  const divLogoLogin = document.createElement('div');
  divLogoLogin.classList.add('divLogoLogin');
  const img1 = document.createElement('img');
  img1.classList.add('img1');
  img1.src = logo;
  img1.alt = 'logoLogin';
  img1.classList.add('logoLogin');

  title.textContent = 'Login';
  buttonLogin.textContent = 'Login';
  buttonLogin.classList.add('button-login');
  buttonLogin.addEventListener('click', () => {
    navigateTo('/feed');
  });
  buttonReturn.textContent = 'Return to home';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  buttonGoogle.textContent = '';
  buttonGoogle.classList.add('button-google');
  buttonGoogle.addEventListener('click', async () => {
    // Invocamos a la función loginWithGoogle que abre el popup de Google
    const user = await loginWithGoogle();
    if (user !== undefined) {
      navigateTo('/dogform');
    }
  });

  form.append(inputEmail, inputPass, buttonLogin);
  section.append(title, divLogoLogin, form, buttonReturn, buttonGoogle);
  divLogoLogin.appendChild(img1);
  return section;
}

export default login;
