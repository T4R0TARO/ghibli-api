import get from "./getElement.js";
import showFilms from "./showFilms.js";

const baseURL = "https://ghibliapi.herokuapp.com/films/";

const form = get(".search-form");
const input = get("[name='film']");

form.addEventListener("keyup", function (e) {
  e.preventDefault();

  console.log(input.value);
  const value = input.value;

  if (!value) return;
  showFilms(`${baseURL}${value}`);
});
