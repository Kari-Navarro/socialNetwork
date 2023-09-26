import { registrarConEmail } from '../firebase/auth.js';

function register(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonRegister = document.createElement('button');
  const divButtonsRegister = document.createElement('div');
  divButtonsRegister.classList.add('div-buttons');

  inputEmail.placeholder = 'Write email';
  inputEmail.type = 'email';
  inputPass.placeholder = 'Password';
  inputPass.type = 'password';

  title.textContent = 'Register';
  buttonRegister.textContent = 'Register';
  buttonRegister.classList.add('button-register');

  buttonReturn.classList.add('button-return');
  buttonReturn.textContent = 'Return to home';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(controlador.registrar(inputEmail.value, inputPass.value));
    registrarConEmail(inputEmail.value, inputPass.value)
      .then((userCredential) => {
        const user = userCredential.user;
        navigateTo('/form');
        return user;
      })
      .catch((error) => {
      // const errorCode = error.code;
        const errorMessage = error.message;
        return errorMessage;
      });
  });
  form.append(inputEmail, inputPass, divButtonsRegister, buttonRegister);
  section.append(title, form, buttonReturn);
  return section;
}
export default register;
