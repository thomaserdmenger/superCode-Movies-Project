import { movies } from './movies.js';

// Get DOM Elements
const section = document.querySelector('.grid-container');
const searchBtn = document.querySelector('form');
const yearUpBtn = document.querySelector('.year-up-btn');
const yearDownBtn = document.querySelector('.year-down-btn');
const rateBtn = document.querySelector('.best-rate-btn');

// ! Initial Render Content to Screen
const content = movies
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

// ! Sort Functions
const sortContent = (event, arr) => {
  const value = event.target.value;
  let sortedArr;
  let content;

  if (value === 'Year Up') {
    sortedArr = arr.sort((a, b) => a[1] - b[1]);
    content = sortedArr
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
  } else if (value === 'Year Down') {
    sortedArr = arr.sort((a, b) => b[1] - a[1]);
    content = sortedArr
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
  } else {
    sortedArr = arr.sort((a, b) => b[5] - a[5]);
    content = sortedArr
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
  }

  section.innerHTML = content;
};

// ! Filter Content by user input
const filterContent = (event, arr) => {
  event.preventDefault();

  const userInput = document.querySelector('.user-input').value;

  const filteredArr = arr.filter((movieArr) => {
    return movieArr.some((item) => {
      if (item.includes(userInput)) {
        return movieArr;
      }
    });
  });

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
yearUpBtn.addEventListener('click', (event) => sortContent(event, movies));
yearDownBtn.addEventListener('click', (event) => sortContent(event, movies));
rateBtn.addEventListener('click', (event) => sortContent(event, movies));
searchBtn.addEventListener('submit', (event) => filterContent(event, movies));
