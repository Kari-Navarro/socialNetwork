import {
  deleteDoc,
} from 'firebase/firestore';

function deletePost(doc, mainSection, currentPost) {
  const dialog = document.createElement('dialog');
  dialog.setAttribute('data-testid', 'dialog');
  const p = document.createElement('p');
  p.textContent = 'Are you sure you want to delete this post?';
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Yes';
  const cancelButton = document.createElement('button');
  cancelButton.classList.add('cancel-button');
  cancelButton.textContent = 'Cancel';

  const containerButtons = document.createElement('div');
  containerButtons.append(deleteButton, cancelButton);

  dialog.append(p, containerButtons);
  mainSection.appendChild(dialog);
  dialog.showModal();

  deleteButton.addEventListener('click', async (e) => {
    // botón de borrar
    e.preventDefault();
    await deleteDoc(doc.ref);
    currentPost.remove();
    dialog.close();
  });

  cancelButton.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
  });
  return dialog;
}

export default deletePost;
