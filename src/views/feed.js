import logo from './logo.png';
import navBar from './navigateBar.js';
import { signOutUser } from '../firebase/auth.js';
import post from './post.js';
import { ListPots } from './listPost.js';

function feed(navigateTo) {
  const sectionFeed = document.createElement('section');
  sectionFeed.classList.add('sectionFeed');
  const postView = post(navigateTo);
  const logoFeed = document.createElement('img');
  logoFeed.src = logo;
  logoFeed.alt = 'logo petslife';
  logoFeed.classList.add('logoFeed');

  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const btnOut = document.createElement('button');
  btnOut.setAttribute('type', 'button');
  btnOut.classList.add('btnOut');
  btnOut.textContent = 'sing out';

  btnOut.addEventListener('click', (e) => {
    e.preventDefault();
    signOutUser()
      .then(() => {
        navigateTo('/');
      });
  });

  sectionFeed.append(logoFeed, btnOut);
  footer.appendChild(navBar(navigateTo));
  sectionFeed.append(postView, ListPots(), footer);
  return sectionFeed;
}
export default feed;
