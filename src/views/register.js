import { signUpUser } from '../firebase/auth.js';
import logo from './logo.png';

// revisar si necesitamos updateCurrentUser

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
  buttonRegister.setAttribute('type', 'submit');

  inputEmail.classList.add('input-email');
  inputEmail.placeholder = 'Write email';
  inputEmail.type = 'email';
  inputPass.classList.add('input-pass');
  inputPass.placeholder = 'Password';
  inputPass.type = 'password';

  const inputUserName = document.createElement('input');
  inputUserName.placeholder = 'Write your full name';
  inputUserName.classList.add('inputUserName');
  inputUserName.type = 'text';

  const logoRegister = document.createElement('img');
  logoRegister.src = logo;
  logoRegister.alt = 'logoRegister';
  logoRegister.classList.add('logoRegister');

  title.textContent = 'User Register';
  buttonRegister.textContent = 'Register';
  buttonRegister.classList.add('button-register');
  buttonReturn.classList.add('buttonReturnRegister');
  buttonReturn.textContent = 'Return to home';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    signUpUser(inputUserName.value, inputEmail.value, inputPass.value)

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
    inputUserName,
    inputEmail,
    inputPass,
    buttonRegister,
    buttonReturn,
  );
  section.append(logoRegister, title, form);
  return section;
}
export default register;
