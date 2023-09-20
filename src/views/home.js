// file home.js
import logo from './logo.png';
import img2 from './img2.jpg';

function home(navigateTo) {
  const section = document.createElement('section');
  const div = document.createElement('div');
  div.classList.add('btns-div');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');
  const fondo = document.createElement('img');
  fondo.classList.add('img2');
  fondo.src = img2;
  fondo.alt = 'img fondo';
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
  div.append(buttonRegister, buttonLogin);
  section.appendChild(fondo);
  section.appendChild(img1);
  section.appendChild(div);
  return section;
}

export default home;
