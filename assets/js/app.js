import { movies } from './movies.js';

// Get DOM Elements
const section = document.querySelector('.grid-container');
const userInput = document.querySelector('.user-input');
const searchBtn = document.querySelector('input[type="submit"]');
const yearUpBtn = document.querySelector('.year-up-btn');
const yearDownBtn = document.querySelector('.year-down-btn');
const rateBtn = document.querySelector('.best-rate-btn');

// ! Render Conent to Screen
// Get content of array and put it into a template literal
const content = movies
  .map((movie) => {
    // Get genres in Sub Array an put it into a templete literal
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

// ! Aufsteigende Sortierung - Year Up

const sortYearUp = () => {
  const sortedYearUpContent = movies.sort((a, b) => {
    return a[1] - b[1];
  });

  const content = sortedYearUpContent
    .map((movie) => {
      // Get genres in Sub Array an put it into a templete literal
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

yearUpBtn.addEventListener('click', sortYearUp);
