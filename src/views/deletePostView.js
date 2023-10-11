import {
  deleteDoc,
} from 'firebase/firestore';

function deletePost(doc, mainSection, currentPost) {
  const dialog = document.createElement('dialog');
  dialog.setAttribute('data-testid', 'dialog');
  dialog.classList.add('dialog');
  const p = document.createElement('p');
  p.textContent = 'Are you sure you want to delete this post?';
  p.classList.add('question');
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('data-testid', 'deleteButton');
  deleteButton.classList.add('yes-btn');
  deleteButton.textContent = 'Yes';
  const cancelButton = document.createElement('button');
  cancelButton.setAttribute('data-testid', 'cancelButton');
  cancelButton.classList.add('cancel-btn');
  cancelButton.textContent = 'Cancel';

  const containerButtons = document.createElement('div');
  containerButtons.classList.add('container-btns');
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
