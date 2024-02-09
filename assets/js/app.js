import { movies } from './movies.js';
// console.table(movies);

const section = document.querySelector('.grid-container');

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
