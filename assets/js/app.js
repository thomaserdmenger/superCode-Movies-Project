import { movies } from './movies.js';
// console.table(movies);

const section = document.querySelector('.grid-container');

// Render Data into Grid
const renderContent = (arr) => {
  // Get content of array and put it into a template literal
  const content = arr
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

renderContent(movies);

// let content = movies
//   .map((item) => {
//     return `<article>
//         <h3>${item[0]}</h3>
//         <p>${item[1]}</p>
//         <p>${item[2]}</p>
//         <p>${item[3]}</p>
//         <p>${item[4]}</p>
//         <p>${item[5]}</p>

//     </article>`;
//   })
//   .join(' ');

// console.table(content);

// section.innerHTML = content;
