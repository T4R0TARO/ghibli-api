import fetchFilms from "./fetchFilms.js";
import displayFilms from "./displayFilms.js";
import setFilm from "./setFilm.js";

const showFilms = async (url) => {
  // fetch films
  const data = await fetchFilms(url);
  // console.log(url);

  // display films
  const section = await displayFilms(data);

  if (section) {
    setFilm(section);
  }
};

export default showFilms;
