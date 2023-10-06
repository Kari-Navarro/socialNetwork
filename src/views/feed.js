// import { db } from '../firebase.js';
import { collection, getDocs } from 'firebase/firestore';
import { signOutUser } from '../firebase/auth.js';
import { auth } from '../firebase/firebase.js';
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

  // const sectionPosts = document.createElement('section');
  // sectionPosts.classList.add('sectionPosts');
  // sectionPosts.appendChild(addPost());

  // Pruebas Kari

  const btnOut = document.createElement('button');
  btnOut.textContent = 'Logout';
  btnOut.addEventListener('click', (e) => {
    e.preventDefault();
    signOutUser()
      .then(() => {
        navigateTo('/');
      });
  });

  auth.onAuthStateChanged((user) => {
    console.log(user);
    if (user) {
      console.log('iniciado');
    } else {
      console.log('saliste de la app');
      console.log(user);
    }
  });

  sectionFeed.append(logoFeed, addPost(), btnOut, footer);
  footer.appendChild(navBar(navigateTo));
  return sectionFeed;

  // const signOutUser = async () => {
  // función para cierre de sesión, no testeada aún
//   try {
//     // función para cierre de sesión, no testeada aún
//     await signOut(auth);
//     console.log('out');
//     return localStorage.removeItem('user');
//   } catch (error) {
//     return alert('Something wrong happened, please try again.');
//   }
//   // termina función de cierre de sesión
// };
}
export default feed;
