// eslint-disable-next-line import/no-extraneous-dependencies
import { fireEvent, getByPlaceholderText, getByText } from '@testing-library/dom';

import post from '../src/views/post';

jest.mock('firebase/firestore', () => ({
  addDoc: jest.fn().mockResolvedValue(true),
  collection: jest.fn().mockResolvedValue(true),
  getFirestore: jest.fn().mockResolvedValue(true),
}));

describe('post', () => {
  it('renderiza post', () => {
    const sectionPost = post();
    expect(sectionPost).not.toBeUndefined();
  });

  it('deberia pintar 1 post cuando hay 1 post en firestore', async () => {
    const sectionPost = post();
    const submitButton = getByText(sectionPost, 'Submit');
    const textArea = getByPlaceholderText(sectionPost, 'Write your post here...');

    fireEvent.change(textArea, {
      target: { value: 'Este post es de nuestro test' },
    });
    fireEvent(submitButton, new MouseEvent('click', {}));
    expect(textArea.value).toBe('Este post es de nuestro test');
  });
});
