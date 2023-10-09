import {
  updateDoc,
} from 'firebase/firestore';

function editPost(doc) {
  const editSection = document.createElement('section');
  editSection.className = 'editSection';
  const textarea = document.createElement('textarea');
  const saveButton = document.createElement('button');
  textarea.textContent = doc.data().Content;
  saveButton.textContent = 'Save changes';
  editSection.append(textarea, saveButton);
  saveButton.addEventListener('click', async () => {
    await updateDoc(doc.ref, { Content: textarea.value }).then(editSection.style.display = 'none');
  });
  return editSection;
}
export default editPost;
