import { collection, addDoc } from 'firebase/firestore';
import { db, auth } from '../firebase/firebase';

const pub = collection(db, 'Post');
function post(navigateTo) {
  const user = auth.currentUser;
  const sectionPost = document.createElement('section');
  sectionPost.classList.add('sectionPost');
  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
  textarea.placeholder = 'Write your post here...';

  const submitButton = document.createElement('button');
  submitButton.classList.add('submitButtonFeed');
  submitButton.setAttribute('type', 'button');
  submitButton.textContent = 'Submit';
  let textareaValue = '';
  textarea.addEventListener('keyup', (e) => {
    textareaValue = e.target.value;
  });

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (textareaValue !== '') {
      addDoc(pub, {
        date: new Date(),
        Content: textareaValue,
        UserName: user.email,
      });
      navigateTo('/feed');
    } else {
      const content = 'Please write something';
      sectionPost.append(content);
    }
  });

  sectionPost.append(textarea, submitButton);

  return sectionPost;
}
export default post;
