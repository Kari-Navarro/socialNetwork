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
  });
});
