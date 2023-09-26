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
  const divButtonsLogin = document.createElement('div');
  divButtonsLogin.classList.add('divs-buttons');

  inputEmail.placeholder = 'Write email';
  inputEmail.type = 'email';
  inputPass.placeholder = 'Password';
  inputPass.type = 'password';

  title.textContent = 'login';
  buttonLogin.textContent = 'Login';
  buttonLogin.classList.add('button-login');
  buttonReturn.textContent = 'Return to home';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  buttonGoogle.textContent = 'Google';
  buttonGoogle.classList.add('button-google');
  buttonGoogle.addEventListener('click', async () => {
    // Invocamos a la función loginWithGoogle que abre el popup de Google
    const user = await loginWithGoogle();
    if (user !== undefined) {
      navigateTo('/dogform');
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que se recargue la página
    loginUser(inputEmail.value, inputPass.value);
    navigateTo('/feed'); // Navega a la página de feed después del inicio de sesión
  });

  form.append(inputEmail, inputPass, divButtonsLogin, buttonLogin);
  section.append(title, form, buttonReturn, buttonGoogle);

  return section;
}

export default login;
