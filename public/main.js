// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
// import jokesData from '../api/jokesData';
import '../styles/main.scss';
// import getJokes from '../api/jokesData';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <button class="btn btn-danger" id="click-me">Get a Joke</button>
    <div id="setup"></div>
    <div id="punchline"></div>
  `;

  document
    .querySelector('#click-me')
    .addEventListener('click', () => {
      console.warn('you clicked me');
    });

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();

// const getSetup = () => {
// const setupDiv = document.querySelector('#setup');
// setupDiv.innertext = `${setup}`;
// };

// getSetup();
