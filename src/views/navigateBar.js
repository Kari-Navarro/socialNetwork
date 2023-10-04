function navBar(navigateTo) {
  const barBox = document.createElement('section');
  barBox.className = 'barBox';
  const feedButton = document.createElement('button');
  feedButton.textContent = 'Feed';
  feedButton.id = 'feedbutton';
  feedButton.className = 'navigation-buttons';
  const profileButton = document.createElement('button');
  profileButton.textContent = 'Profile';
  profileButton.className = 'navigation-buttons';
  profileButton.id = 'profilebutton';

  feedButton.addEventListener('click', async (e) => {
    e.preventDefault();
    navigateTo('/feed');
  });

  profileButton.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/profile');
  });

  barBox.append(feedButton, profileButton);
  return barBox;
}

export default navBar;
