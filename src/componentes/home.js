// file home.js
function home(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');

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


  title.textContent = 'Petslife';

  section.append(title, buttonRegister, buttonLogin);
  return section;
}

export default home;
