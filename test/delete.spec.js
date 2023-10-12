// eslint-disable-next-line import/no-extraneous-dependencies
import {
  fireEvent,
  queryAllByTestId,
} from '@testing-library/dom';
import deletePost from '../src/views/deletePostView';

beforeAll(() => {
  // mock del diálogo
  HTMLDialogElement.prototype.showModal = jest.fn();
  HTMLDialogElement.prototype.close = jest.fn();
});

describe('deletePost', () => {
  it('should display a confirmation dialog', () => {
    const mainSection = document.createElement('div');
    const currentPost = document.createElement('div');

    const dialogContainer = deletePost({ ref: 'mocked-reference' }, mainSection, currentPost);
    const cancelButton = queryAllByTestId(dialogContainer, 'cancelButton');
    fireEvent(cancelButton[0], new MouseEvent('click', {}));
    console.log(dialogContainer);
    // Verificar que el diálogo se haya creado y esté mostrándose
    // expect(dialogContainer.tagName).toBe('DIALOG');
    // expect(dialogContainer.hasAttribute('data-testid')).toBe(true);

    // Verificar que el mensaje y los botones estén presentes en el diálogo
    /* expect(dialogContainer.querySelector('p').textContent).toBe('Are 
    you sure you want to delete this post?');
    expect(dialogContainer.querySelectorAll('button')).toHaveLength(2);
    expect(dialogContainer.querySelector('button').textContent).toBe('Yes');
    expect(dialogContainer.querySelector('.cancel-button').textContent).toBe('Cancel'); */
  });

  // it('should delete the post when "Yes" is clicked', async () => {
  //   const mainSection = document.createElement('div');
  //   const currentPost = document.createElement('div');

  //   const dialog = deletePost({ ref: 'mocked-reference' }, mainSection, currentPost);

  //   // Simular el clic en el botón "Yes"
  //   const deleteButton = dialog.querySelector('button');
  //   fireEvent.click(deleteButton);

  //   // Verificar que deleteDoc fue llamado con la referencia correcta
  //   expect(deleteDoc).toHaveBeenCalledWith('mocked-reference');

  //   // Verificar que el diálogo se haya cerrado
  //   expect(dialog.hasAttribute('open')).toBe(false);

  //   // Verificar que el post se haya eliminado
  //   expect(currentPost.parentNode).toBe(null);
  // });

  // it('should close the dialog when "Cancel" is clicked', () => {
  //   const mainSection = document.createElement('div');
  //   const currentPost = document.createElement('div');
  //   const post = document.createElement('h1');
  //   post.innerHTML = 'Hello';
  //   currentPost.appendChild(post);
  //   mainSection.appendChild(currentPost);

  //   const dialog = deletePost({ ref: 'mocked-reference' }, mainSection, currentPost);

  //   // Simular el clic en el botón "Cancel"
  //   const cancelButton = queryAllByTestId(dialog, 'cancelButton');
  //   fireEvent(cancelButton[0], new MouseEvent('click', {}));

  //   // Verificar que el diálogo se haya cerrado
  //   expect(dialog.hasAttribute('open')).toBe(false);

  //   // Verificar que el post no se haya eliminado
  //   expect(currentPost).toBe(mainSection);
  // });
});
