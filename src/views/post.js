import { collection, addDoc } from 'firebase/firestore';
import { db, auth } from '../firebase/firebase';

const pub = collection(db, 'Post');

function addPost() {
  const user = auth.currentUser;
  // const userID = user.uid;

  const sectionPost = document.createElement('section');
  const textarea = document.createElement('textarea');
  textarea.className = 'textPost';
  textarea.placeholder = 'Write your post here...';
  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (textarea.value !== '') {
      {
        const content = 'Please write something';
        sectionPost.append(content);
      }
      addDoc(pub, {
        date: new Date(),
        text: sectionPost.text.value,
        UserName: user.displayName,
      });
      textarea.value = '';
    }
  });

  sectionPost.appendChild(textarea, submitButton);

  return sectionPost;
}
export default addPost;
