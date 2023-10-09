import {
  updateDoc,
} from 'firebase/firestore';

function editPost(doc) {
  const editSection = document.createElement('section');
  editSection.className = 'editSection';
  const textarea = document.createElement('textarea'); // crea textarea en el post
  const saveButton = document.createElement('button'); // botón de guardar
  textarea.textContent = doc.data().Content; // se coloca contenido del post en textarea
  saveButton.textContent = 'Save changes';
  editSection.append(textarea, saveButton);
  saveButton.addEventListener('click', async () => {
    // listener botón de guardar para acualizar el registro firebase
    await updateDoc(doc.ref, { Content: textarea.value }).then(editSection.style.display = 'none'); // se actualiza el contenido
  });
  return editSection;
}
export default editPost;
