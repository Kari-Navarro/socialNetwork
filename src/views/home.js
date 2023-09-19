// file home.js
import logo from '../views/logo.png';


function home(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');

  buttonRegister.classList.add('btn-register');
  buttonRegister.textContent = 'Register';
  buttonRegister.addEventListener('click', () => {
    const img1 = document.createElement('img');
    img1.classList.add('img1');
    img1.src = logo;
    img1.alt = 'logo petslife';

    navigateTo('/register');



    
  });

  buttonLogin.classList.add('btn-login');
  buttonLogin.textContent = 'Login';
  buttonLogin.addEventListener('click', () => {
    navigateTo('/login');
  });


  title.textContent = 'Petslife';
  section.append(title, buttonRegister, buttonLogin, img1);
  return section;
}

export default home;
