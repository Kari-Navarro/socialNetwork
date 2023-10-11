import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebase.js';
import editPost from './editPostView';
import deletePost from './deletePostView.js';

export const ListPots = () => {
  const section = document.createElement('section');
  section.id = 'section-listpost';

  const q = query(collection(db, 'Post'));
  onSnapshot(q, (querySnapshot) => {
    section.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const onePost = document.createElement('section');
      onePost.className += 'individual-post';
      const datePost = document.createElement('p');
      datePost.classList.add('date-post');
      const postContent = document.createElement('p');
      postContent.classList.add('post-content');
      const userName = document.createElement('p');
      userName.classList.add('user-name');
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.classList.add('btn-edit-listpost');
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('btn-delete-listpost');
      let editView = null;
      editButton.addEventListener('click', () => {
        editView = editPost(doc);
        onePost.appendChild(editView);
      });
      deleteButton.addEventListener('click', () => {
        deletePost(doc, section, onePost);
      });
      userName.textContent = doc.data().UserName;
      datePost.textContent = new Date(doc.data().date.seconds * 1000).toLocaleString();
      postContent.textContent = doc.data().Content;
      onePost.append(userName, datePost, postContent, editButton, deleteButton);

      section.append(onePost);
    });
  });
  return section;
};
