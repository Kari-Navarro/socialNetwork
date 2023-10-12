import post from '../src/views/post.js';

// 1.hacer una descripción clara de qué va a hacer el test
// 2.se pone el container para testear lo hay adentro, botones, textareas etc
describe('post', () => {
  it('deberia realizar el envio del post correctamente', () => {
    const navigateTo = () => {};
    const postContent = post(navigateTo);
    const textarea = postContent.querySelector('.textarea');
    const button = postContent.querySelector('.submitButtonFeed');
    textarea.value = 'petsLife';
    expect(textarea).toBeTruthy();
    expect(button).toBeTruthy();
    expect(textarea.value).toBe('petsLife');
  });
});
