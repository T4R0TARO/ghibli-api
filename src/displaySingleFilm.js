import { hideLoading } from "./toggleLoading.js";
import get from "./getElement.js";

const displayFilm = (data) => {
  hideLoading();

  console.log(data);
  //   const film = data.films[0];
  //   console.log(film);

  const {
    title: title,
    original_title: jpTitle,
    original_title_romanised: romanji,
    image: image,
    movie_banner: banner,
    description: desc,
    director: director,
    producer: producer,
    release_date: releaseDate,
  } = data;

  const img = get(".film-img");
  const filmName = get(".film-name");
  const japaneseTitle = get(".jp-title");
  const romanjiTitle = get(".romanji");
  const description = get(".film-desc");
  const filmDirector = get(".director");
  const filmProducer = get(".producer");
  const filmRelease = get(".release-date");
  const filmBanner = get(".banner");

  img.src = image;
  document.title = title;
  filmName.textContent = title;
  japaneseTitle.textContent = jpTitle;
  romanjiTitle.textContent = romanji;
  filmDirector.textContent = director;
  filmProducer.textContent = producer;
  filmRelease.textContent = releaseDate;
  description.textContent = desc;
  filmBanner.src = banner;
};

export default displayFilm;
