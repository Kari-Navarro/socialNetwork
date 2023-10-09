// import { db } from '../firebase.js';
/* import {
  query,
  collection,
  onSnapshot,
  orderBy,
} from 'firebase/firestore';
import { db } from '../firebase/firebase';
import logo from './logo.png';
import navBar from './navigateBar.js';
import { signOutUser } from '../firebase/auth.js'; */
import post from './post.js';
import { ListPots } from './listPost.js';

function feed(navigateTo) {
  // const userID = user.uid;
  const sectionFeed = document.createElement('section');
  sectionFeed.classList.add('sectionFeed');
  // Query a firestore a la tabla o coleccion Post ordenando por descendente
  // const q = query(collection(db, 'Post'), orderBy('Date', 'desc'));
  // const sectionPosts = document.createElement('section'); // Section para los post
  // sectionPosts.classList.add('sectionPosts');

  // const postsContainer = document.createElement('section');
  // postsContainer.classList.add('postsContainer');

  const postView = post(navigateTo);
  /*
  onSnapshot(q, (querySnapshot) => {
    // postsContainer.innerHTML = ''; //para evitar que se dupliquen las publicaciones con el submit
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      const onePost = document.createElement('section'); // sección individual post, para formato
      onePost.className += 'individual-post'; // asigna clase a posts individuales

      const datePost = document.createElement('p');
      datePost.classList.add('date-post'); // fecha del post (cambiar formato)
      const postContent = document.createElement('p');
      postContent.classList.add('post-content'); // contenido del post
      const userName = document.createElement('p'); // usuario que crea el post
      userName.classList.add('user-name');

      // a traves de la funcion data() obtenemos el valor de UserName
      userName.textContent = doc.data().UserName;
      datePost.textContent = doc.data().Date.toDate().toLocaleDateString();
      postContent.textContent = doc.data().Content;
      onePost.appendChild(userName);
      onePost.appendChild(datePost);
      onePost.appendChild(postContent);
      sectionFeed.append(onePost);
      // postsContainer.appendChild(onePost);
    });

    const logoFeed = document.createElement('img');
    logoFeed.src = logo;
    logoFeed.alt = 'logo petslife';
    logoFeed.classList.add('logoFeed');

    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const btnOut = document.createElement('button');

    btnOut.addEventListener('click', (e) => {
      e.preventDefault();
      signOutUser()
        .then(() => {
          navigateTo('/');
        });
    });
    // auth.onAuthStateChanged((user) => {
    //   // console.log(user);
    //   if (user) {
    //     navigateTo('/feed');
    //   } else {
    //     navigateTo('/login');
    //   }
    // });

    // sectionPosts.appendChild(post()); // addPost() es la vista para agregar post
    // sectionPosts.append(postsContainer);
    sectionFeed.append(logoFeed, footer);
    footer.appendChild(navBar(navigateTo));
  }); */
  sectionFeed.append(postView, ListPots());
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
