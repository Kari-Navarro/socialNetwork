// file home.js
function home(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const button = document.createElement('button');

  button.textContent = 'register';
  button.addEventListener('click', () => {
    navigateTo('/login');
  });

  title.textContent = 'Petslife';

  section.append(title, button);
  return section;
}

export default home;
