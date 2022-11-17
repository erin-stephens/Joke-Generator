// import renderToDom from '../utils/render';
// import getJokes from '../public/main';

const getAJokeBtn = document.querySelector('#click-me');
getAJokeBtn.addEventListener('click', () => {
  // renderToDom(getJokes());
  console.warn("i've been clicked");
});

export default getAJokeBtn;
