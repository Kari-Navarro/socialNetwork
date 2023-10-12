import {
  deleteDoc,
} from 'firebase/firestore';

function deletePost(doc, mainSection, currentPost) {
  // const dialogContainer = document.createElement('div');
  // dialogContainer.setAttribute('data-testid', 'dialogContainer');
  // dialogContainer.innerHTML = `<dialog
  //   data-testid="dialog"
  //   id="deletePostDialog"
  // >
  //   <p>
  //     Are you sure you want to delete this post?
  //   </p>
  //   <div>
  //     <button id="deletePostYesButton">
  //       Yes
  //     </button>
  //     <button
  //     id="deletePostCancelButton"
  //       class="cancel-button"
  //     >
  //       Cancel
  //     </button>
  //   </div>
  // </dialog>`;
  const dialog = document.createElement('dialog');
  dialog.setAttribute('data-testid', 'dialog');
  dialog.id = 'deletePostDialog';
  const p = document.createElement('p');
  p.textContent = 'Are you sure you want to delete this post?';
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Yes';
  deleteButton.setAttribute('data-testid', 'yesButton');
  const cancelButton = document.createElement('button');
  cancelButton.classList.add('cancel-button');
  cancelButton.textContent = 'Cancel';
  cancelButton.setAttribute('data-testid', 'cancelButton');

  const containerButtons = document.createElement('div');
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
