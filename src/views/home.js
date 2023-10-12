// file home.js
import logo from './logo.png';

function home(navigateTo) {
  const section = document.createElement('section');
  section.classList.add('sectionHome');
  const div = document.createElement('div');
  div.classList.add('btns-div');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');
  const divImage = document.createElement('div');
  divImage.classList.add('divImage');
  const logoHome = document.createElement('img');
  logoHome.src = logo;
  logoHome.alt = 'logo petslife';
  logoHome.classList.add('logoHome');

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

  section.appendChild(logoHome);
  section.appendChild(div);
  div.appendChild(buttonRegister);
  div.appendChild(buttonLogin);

  return section;
}

export default home;
