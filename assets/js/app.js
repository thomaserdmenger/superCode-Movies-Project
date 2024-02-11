import { movies } from './movies.js';

// Get DOM Elements
const section = document.querySelector('.grid-container');
const searchBtn = document.querySelector('.form-filters');
const yearUpBtn = document.querySelector('.year-up-btn');
const yearDownBtn = document.querySelector('.year-down-btn');
const rateBtn = document.querySelector('.best-rate-btn');
const errorMessage = document.querySelector('.error-message');
const openedEye = document.querySelector('.opened-eye');
const closedEye = document.querySelector('.closed-eye');
const addMovieForm = document.querySelector('.form-new-movie');

let newArr = [...movies];

// ! Initial Render Content to Screen
const renderContent = () => {
  section.innerHTML = '';

  document.querySelector('.user-input').focus();

  const content = newArr
    .map((movie) => {
      const genres = movie[4].map((genre) => `<p>${genre}</p>`).join(' ');
      return `<article>
          <h3>${movie[0]}</h3>
          <p>${movie[1]}</p>
          <p class="bold">${movie[2]}</p>
          <p>${movie[3]}</p>
          ${genres}
          <p>${movie[5]}</p>
       </article>`;
    })
    .join(' ');

  section.innerHTML = content;
};

renderContent();

// ! Error Message
const renderError = () => {
  if (
    newArr.length === 0 ||
    document.querySelector('.user-input').value === ''
  ) {
    errorMessage.classList.add('show-error-message');
    section.innerHTML = '';
  } else {
    errorMessage.classList.remove('show-error-message');
  }
};

// ! Sort Functions
const sortContent = (event, arr) => {
  const value = event.target.value;

  if (value === 'Year Up') {
    newArr = movies.sort((a, b) => a[1] - b[1]);
    renderContent();
    console.table(movies);
    console.table(newArr);
  } else if (value === 'Year Down') {
    newArr = movies.sort((a, b) => b[1] - a[1]);
    renderContent();
  } else {
    newArr = movies.sort((a, b) => b[5] - a[5]);
    renderContent();
  }
};

// ! Filter Content by user inputgi
const filterContent = (event) => {
  event.preventDefault();

  const userInput = document.querySelector('.user-input').value.toLowerCase();

  newArr = movies.filter((movieArr) => {
    const stringMatch = movieArr.some(
      (item) =>
        typeof item === 'string' && item.toLowerCase().includes(userInput)
    );

    const genreMatch = movieArr[4].some(
      (genre) =>
        typeof genre === 'string' && genre.toLowerCase().includes(userInput)
    );

    return stringMatch || genreMatch;
  });

  renderContent();
  renderError();
  document.querySelector('.user-input').value = '';
};

// ! Add Movies

const showContent = () => {
  openedEye.classList.add('hide-icon');
  closedEye.classList.remove('hide-icon');
  addMovieForm.classList.add('show-form');
  addMovieForm.classList.remove('form-new-movie');
};

const hideContent = () => {
  openedEye.classList.remove('hide-icon');
  closedEye.classList.add('hide-icon');
  addMovieForm.classList.add('form-new-movie');
  addMovieForm.classList.renmove('show-form');
};

// ! Event Listener Functions
yearUpBtn.addEventListener('click', sortContent);
yearDownBtn.addEventListener('click', sortContent);
rateBtn.addEventListener('click', sortContent);
searchBtn.addEventListener('submit', filterContent);
openedEye.addEventListener('click', showContent);
closedEye.addEventListener('click', hideContent);
