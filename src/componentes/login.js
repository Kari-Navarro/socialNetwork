import { controlador } from '../lib/controlador';

function login(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonLogin = document.createElement('button');

  inputEmail.placeholder = 'Write email';
  inputEmail.type = 'email';
  inputPass.placeholder = 'pass';
  inputPass.type = 'password';

  title.textContent = 'Login';
  buttonLogin.textContent = 'go';

  buttonReturn.textContent = 'Return to home';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    controlador.registrar(inputEmail.value, inputPass.value);
  });

  form.append(inputEmail, inputPass, buttonLogin);
  section.append(title, form, buttonReturn);

  return section;
}
export default login;
