import { registrarConEmail } from '../firebase/auth.js';

function register(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonRegister = document.createElement('button');
  // const inputConfirm = document.createElement('input');
  // const inputId = document.createElement('input');

  inputEmail.placeholder = 'Write email';
  inputEmail.type = 'email';
  inputPass.placeholder = 'Password';
  inputPass.type = 'password';
  //  inputConfirm.type = 'password';
  // inputConfirm.placeholder = 'Confirm password';
  // inputId.type = 'text';
  // inputId.placeholder = 'Write your full name';

  title.textContent = 'Register';
  buttonRegister.textContent = 'Register';

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
  form.append(inputEmail, inputPass, buttonRegister);
  section.append(title, form, buttonReturn);
  return section;
}
export default register;
