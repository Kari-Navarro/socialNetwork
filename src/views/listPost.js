import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebase.js';

export const ListPots = () => {
  const section = document.createElement('section');
  section.id = 'section-listpost';
  const p = document.createElement('p');
  p.textContent = ' Pruebaaaa';

  const q = query(collection(db, 'Post'));
  onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // console.log(doc.data());
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
      datePost.textContent = doc.data().Date;
      postContent.textContent = doc.data().text;
      onePost.append(userName, datePost, postContent);

      section.append(onePost);
    });
  });
  section.append(p);
  return section;
};
