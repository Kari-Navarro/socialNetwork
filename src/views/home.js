// file home.js
import logo from './logo.png';

function home(navigateTo) {
  const section = document.createElement('section');
  const div = document.createElement('div');
  div.classList.add('btns-div');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');
  const divImage = document.createElement('div');
  divImage.classList.add('divImage');
  // const fondo = document.createElement('img');
  // fondo.classList.add('img2');
  // fondo.src = back;
  // fondo.alt = 'img fondo';
  const divLogo = document.createElement('div');
  divLogo.classList.add('divLogo');
  const img1 = document.createElement('img');
  img1.classList.add('img1');
  img1.src = logo;
  img1.alt = 'logo petslife';
  img1.classList.add('logo');

  buttonRegister.classList.add('btn-register');
  buttonRegister.textContent = 'Register';
  buttonRegister.addEventListener('click', () => {
    navigateTo('/register');
  });

  buttonLogin.classList.add('btn-login');
  buttonLogin.textContent = 'Login';
  buttonLogin.addEventListener('click', () => {
    navigateTo('/login');
  });

  section.appendChild(divLogo);
  divLogo.appendChild(img1);
  // section.appendChild(divImage);
  // divImage.appendChild(fondo);
  section.appendChild(div);
  div.appendChild(buttonRegister);
  div.appendChild(buttonLogin);

  return section;
}

export default home;
