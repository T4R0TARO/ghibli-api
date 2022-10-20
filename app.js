import showFilms from "./src/showFilms.js";
import "./src/searchForm.js";

const URL = "https://ghibliapi.herokuapp.com/films/";

window.addEventListener("DOMContentLoaded", () => {
  showFilms(URL);
});

// TODO: searchForm.js
