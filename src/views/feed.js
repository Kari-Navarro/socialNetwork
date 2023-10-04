// import { db } from '../firebase.js';
import logo from './logo.png';
import navBar from './navigateBar.js';
import addPost from './post.js';

function feed(navigateTo) {
  const sectionFeed = document.createElement('section');
  // const userID = user.uid;
  // const currentUserName = user.displayName;
  sectionFeed.classList.add('sectionFeed');
  const logoFeed = document.createElement('img');
  logoFeed.src = logo;
  logoFeed.alt = 'logo petslife';
  logoFeed.classList.add('logoFeed');

  const footer = document.createElement('footer');

  const sectionPosts = document.createElement('section');
  sectionPosts.classList.add('sectionPosts');
  sectionPosts.appendChild(addPost());

  sectionFeed.append(logoFeed);
  footer.appendChild(navBar(navigateTo));
  return sectionFeed;
}
export default feed;
