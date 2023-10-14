import {
  deleteDoc,
} from 'firebase/firestore';

function deletePost(doc, mainSection, currentPost) {
  const dialog = document.createElement('dialog');
  dialog.setAttribute('data-testid', 'dialog');
  dialog.classList.add('dialog');
  dialog.id = 'deletePostDialog';
  const p = document.createElement('p');
  p.textContent = 'Are you sure you want to delete this post?';
  p.classList.add('question');
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('data-testid', 'deleteButton');
  deleteButton.classList.add('yes-btn');
  deleteButton.textContent = 'Yes';
  deleteButton.setAttribute('data-testid', 'yesButton');
  const cancelButton = document.createElement('button');
  cancelButton.setAttribute('data-testid', 'cancelButton');
  cancelButton.classList.add('cancel-btn');
  cancelButton.textContent = 'Cancel';
  cancelButton.setAttribute('data-testid', 'cancelButton');

  const containerButtons = document.createElement('div');
  containerButtons.classList.add('container-btns');
  containerButtons.append(deleteButton, cancelButton);

  dialog.append(p, containerButtons);
  mainSection.append(dialog);
  // const dialog = dialogContainer.querySelector('#deletePostDialog');
  // const deleteButton = dialogContainer.querySelector('#deletePostYesButton');
  // const cancelButton = dialogContainer.querySelector('#deletePostCancelButton');

  dialog.showModal();
  // botón de borrar
  deleteButton.addEventListener('click', async (e) => {
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
