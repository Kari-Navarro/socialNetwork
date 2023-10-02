import { signUpUser, updateCurrentUser } from '../firebase/auth.js';

function register(navigateTo) {
  const section = document.createElement('section');
  section.classList.add('section-register');
  const title = document.createElement('h2');
  title.classList.add = ('title');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  form.classList.add('form-register');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonRegister = document.createElement('button');
  const divButtonsRegister = document.createElement('div');
  divButtonsRegister.classList.add('div-buttons');

  /* // Crear un elemento de imagen para el logotipo
  const logo = document.createElement('img');
  logo.src = 'logo.png'; // Ruta de la imagen del logotipo
  logo.alt = 'Logotipo de la empresa';

  // Agregar el logotipo al encabezado (header)
  const header = document.querySelector('header');
  header.append(logo); */

  inputEmail.classList.add('input-email');
  inputEmail.placeholder = 'Write email';
  inputEmail.type = 'email';
  inputPass.classList.add('input-pass');
  inputPass.placeholder = 'Password';
  inputPass.type = 'password';

  title.textContent = 'User Register';
  buttonRegister.textContent = 'Register';
  buttonRegister.classList.add('button-register');
  /* buttonRegister.addEventListener('click', () => {
    navigateTo('/dogform');
  }); */
  buttonReturn.classList.add('button-return');
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
    divButtonsRegister,
    buttonRegister,
    buttonReturn,
  );
  section.append(title, form);
  return section;
}
export default register;
