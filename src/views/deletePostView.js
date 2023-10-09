import {
  deleteDoc,
} from 'firebase/firestore';

function deletePost(doc, mainSection, currentPost) {
  const dialog = document.createElement('dialog'); // se crea diálogo
  dialog.setAttribute('data-testid', 'dialog');
  const p = document.createElement('p'); // texto del diálogo
  p.textContent = 'Are you sure you want to delete this post?';
  const deleteButton = document.createElement('button'); // botón de borrar
  deleteButton.textContent = 'Yes';
  const cancelButton = document.createElement('button'); // botón cancelar
  cancelButton.classList.add('cancel-button');
  cancelButton.textContent = 'Cancel';

  const containerButtons = document.createElement('div');
  containerButtons.append(deleteButton, cancelButton);

  dialog.append(p, containerButtons);
  mainSection.appendChild(dialog);
  dialog.showModal(); // se muestra el modal (diálogo)

  deleteButton.addEventListener('click', async (e) => {
    // botón de borrar
    e.preventDefault();
    await deleteDoc(doc.ref); // se borra el documento de la colección
    currentPost.remove(); // se borra post de la view
    dialog.close(); // se cierra el diálogo
  });

  cancelButton.addEventListener('click', (e) => {
    // botón de cancelar
    e.preventDefault();
    dialog.close(); // sólo se cierra el diálogo
  });
  return dialog;
}

export default deletePost;
