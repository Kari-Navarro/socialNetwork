/* function navBar(navigateTo) {
  const barBox = document.createElement('section');
  barBox.classList.add('barBox');
  const feedButton = document.createElement('button');
  feedButton.textContent = 'Feed';
  feedButton.classList.add('feedbutton');
  feedButton.className = 'navigation-buttons';
  feedButton.setAttribute('type', 'click');
  const profileButton = document.createElement('button');
  profileButton.textContent = 'Profile';
  profileButton.className = 'navigation-buttons';
  profileButton.classList.add('profilebutton');
  profileButton.setAttribute('type', 'click');

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

export default navBar; */
