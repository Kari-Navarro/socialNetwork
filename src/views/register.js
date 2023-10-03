import { signUpUser, updateCurrentUser } from '../firebase/auth.js';
import logo from './logo.png';

function register(navigateTo) {
  const section = document.createElement('section');
  section.classList.add('section-register');
  const title = document.createElement('h2');
  title.id = 'titleRegister';
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  form.classList.add('form-register');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonRegister = document.createElement('button');

  inputEmail.classList.add('input-email');
  inputEmail.placeholder = 'Write email';
  inputEmail.type = 'email';
  inputPass.classList.add('input-pass');
  inputPass.placeholder = 'Password';
  inputPass.type = 'password';

  const logoRegister = document.createElement('img');
  logoRegister.src = logo;
  logoRegister.alt = 'logoRegister';
  logoRegister.classList.add('logoRegister');

  title.textContent = 'User Register';
  buttonRegister.textContent = 'Register';
  buttonRegister.classList.add('button-register');
  /* buttonRegister.addEventListener('click', () => {
    navigateTo('/dogform');
  }); */
  buttonReturn.classList.add('buttonReturnRegister');
  buttonReturn.textContent = 'Return to home';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    signUpUser(inputEmail.value, inputPass.value)

      .then((userCredential) => {
        const user = userCredential.user;
        navigateTo('/dogform');
        return user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        return errorMessage;
      });
  });
  form.append(
    inputEmail,
    inputPass,
    buttonRegister,
    buttonReturn,
  );
  section.append(logoRegister, title, form);
  return section;
}
export default register;
