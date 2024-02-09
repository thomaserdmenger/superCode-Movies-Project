import { movies } from './movies.js';

// Get DOM Elements
const section = document.querySelector('.grid-container');
const searchBtn = document.querySelector('form');
const yearUpBtn = document.querySelector('.year-up-btn');
const yearDownBtn = document.querySelector('.year-down-btn');
const rateBtn = document.querySelector('.best-rate-btn');

let newArr = movies;

// ! Initial Render Content to Screen
const renderContent = () => {
  section.innerHTML = '';

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

// ! Sort Functions
const sortContent = (event, arr) => {
  const value = event.target.value;

  if (value === 'Year Up') {
    newArr = arr.sort((a, b) => a[1] - b[1]);
    renderContent();
  } else if (value === 'Year Down') {
    newArr = arr.sort((a, b) => b[1] - a[1]);
    renderContent();
  } else {
    newArr = arr.sort((a, b) => b[5] - a[5]);
    renderContent();
  }
};

// ! Filter Content by user input
const filterContent = (event, arr) => {
  event.preventDefault();

  const userInput = document.querySelector('.user-input').value.toLowerCase();

  const filteredArr = arr.filter((movieArr) =>
    movieArr.some(
      (item) =>
        typeof item === 'string' && item.toLowerCase().includes(userInput)
    )
  );

  const content = filteredArr
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

// ! Event Listener Functions
yearUpBtn.addEventListener('click', (event) => sortContent(event, newArr));
yearDownBtn.addEventListener('click', (event) => sortContent(event, movies));
rateBtn.addEventListener('click', (event) => sortContent(event, movies));
searchBtn.addEventListener('submit', (event) => filterContent(event, movies));
