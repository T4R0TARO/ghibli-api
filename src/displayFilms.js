import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayFilms = (films) => {
  const title = get(".title");
  const section = get(".section-center");
  //   const section = document.querySelector(".section-center");
  // console.log(films);

  if (!films) {
    // Hide Loading
    hideLoading();
    title.textContent = "sorry, no film matched your search";
    section.innerHTLM = null;
    return;
  }

  let newFilms = films
    .map((film) => {
      // console.log(film);
      const { id: id, title: title, image: image } = film;
      return `<a href="film.html">
          <article class="film" data-id="${id}">
            <img src="${image}" alt="${title}" />
            <h3>${title}</h3>
          </article>
        </a>`;
    })
    .join("");

  // Hide Loading
  hideLoading();
  // console.log(newFilms);

  title.textContent = "";
  section.innerHTML = newFilms;
  return section;
};

export default displayFilms;
