import fetchFilms from "./src/fetchFilms.js";
import displayFilm from "./src/displaySingleFilm.js";

const presentFilm = async () => {
  const id = localStorage.getItem("film");

  if (!id) {
    window.location.replace("index.html");
  } else {
    const film = await fetchFilms(
      `https://ghibliapi.herokuapp.com/films/${id}`
    );
    displayFilm(film);
  }
};

window.addEventListener("DOMContentLoaded", presentFilm);
