# GHIBLI API

## SET HTML STRUCTURE

```html
<!-- DISPLAY FILMS -->
<section class="section films">
  <!-- LOADING GIF -->
  <article class="loading">
    <img src="./totoro.gif" alt="loading" />
  </article>

  <h2 class="title">title</h2>
  <div class="section-center">
    <!-- FILM CONTENT -->
  </div>
</section>
```

### DISPLAY FILM

- `<section> Film items will be displayed here </section>`
- `<article class="loading"> display gif </article>`

### app.js

```js
// * Ghibli API base URL will contain the data that will be used for the app
const URL = "https://ghibliapi.herokuapp.com/films/";

/*
 * When the page loads...
 * Call func showFilms()
 * Pass URL in showFilms(URL)
 */
window.addEventListener("DOMContentLoaded", () => {
  showFilms(URL);
});
```

### showFilms(URL)

- Seperate func module
- import showFilms() func from module showFilms.js

```js
import showFilms from "./src/showFilms.js";
```

### showFilms.js

- `export default showFilms` allows showFilms func to be imported to other modules
- showFilms() will call fetchFilms() and displayFilms()
- to use these func we must import them from their module

```js
import fetchFilms form "./fetchFilms.js";
import displayFilms form "./displayFilms.js";
import setFilm from "./setFilm.js;
```

```js
// async func will call two inner fun
const showFilms = async (url) => {
  // fetch films
  const data = await fetchFilms(url);

  // display films
  const section = await displayFilms(data);

  // if section is present setFilm in section
  if (section) {
    setFilm(section);
  }
};

// export func showFilms so other modules can import the func
export default showFilms;
```

- fetchFilms(url) will take the url and fetch the films data/ contain in var data
- displayFilms(data) will take var data and display films data

### fetchFilms()

- set func as aysnc
- try{}catch(error)
- fetch() data from API
- json() data and return it
- if something goes wrong display err

```js
import {showLoading} from = "./toggleLoading.js";

const fetchFilms = async (url) => {
  try {
    // showLoading() func wil be made later to display loading gif
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// export fetchFilms func to allow other modules to import func
export default fetchFilms;
```

### displayFilms()

- Get elements and contain in var
- If no films return err
- Iterate films data
- return template literal to dynamiclly display html
- destructure film obj to access properties and rename
- have section element = the iterated newFilm data
- return section

```js
import get from "./getElement.js";

const displayFilms = (film) => {
  //get elements document.querySelector(".section-center")
  const title = get(".title");
  const section = get(".section-center");

  // Edge case check for err
  if (!films) {
    title.textContent = "sorry, no film matched your search";
    section.innerHTML = null;
    return;
  }

  // iterate through films data
  let newFilms = films
    .map((film) => {
      // destructure obj to use and rename properties
      const { id: id, title: title, image: image } = film;
      return `<a href="film.html">
          <article class="film" data-id="${id}">
            <img src="${image}" alt="${title}" />
            <h3>${title}</h3>
          </article>
        </a>`;
    })
    .join("");

  // hideLoading();

  // make title textContent blank
  title.textContent = "";
  // have section htlm value = newFilms to display data
  section.innerHTML = newFilms;
  // return section
  return section;
};

export default displayFilms;
```

### setFilm

- target element section
- addEventListener to section
- when clicked, retrieve the target's parent data id
- localStorage.setItem = sets item to local storage with name and id
- export func so other modules can import it

```js
const setFilm = (section) => {
  section.addEventListener("click", function (e) {
    const id = e.target.parentElement.dataset.id;
    localStorage.setItem("film", id);
    console.log(id);
  });
};

export default setFilm;
```

### toggleLoading.js

- get element and contain in var
- remove class
- add class
- export both func so other modules can import

```js
import get from "./getElement.js";

// document.querySelectory(".loading") get Element
const loading = get(".loading");

// removes class "hide-loading"
export const showLoading = () => {
  loading.classList.remove("hide-loading");
};

// add class "hide-loading"
export const hideLoading = () => {
  loading.classList.add("hide-loading");
};
```

### singleFilm.js / presentFilm()

- get item from local storage
- if no id return to index.html
- else fetchFilms with base url/id
- call displayFilm(film) from other module
- when window loads call presentFilm func

```js
// import fetchFilms func
import fetchFilms from "./src/fetchFilms.js";
// this func will be made later
import displayFilms from "./src/displaySingleFilm.js";

const presentFilm = async () => {
  // gets item from local storage w/ name 'film"
  const id = localStorage.getItem("film");

  // if no id return to index.html
  if (!id) {
    window.location.replace("index.html");
  } else {
    // other access base url and apply id
    const film = await fetchFilms(
      `https://ghibliapi.herokuapp.com/films/${id}`
    );
    // displayFilm func and pass the film url
    displayFilm(film);
  }
};

window.addEventListener("DOMContentLoaded", presentFilm);
```

### displaySingleFilm.js / displayFilm()

```js
import { hideLoading } from "./toggleLoading.js";

const displayFilm = (data) => {
  // hide loading gif
  hideLoading();

  // destructure data from obj properties
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

  // get elements and contain in var
  const img = get(".film-img");
  const filmName = get(".film-name");
  const japaneseTitle = get(".jp-title");
  const romanjiTitle = get(".romanji");
  const description = get(".film-desc");
  const filmDirector = get(".director");
  const filmProducer = get(".producer");
  const filmRelease = get(".release-date");
  const filmBanner = get(".banner");

  // apply the properties value to the elements var
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

// export displayFilm func so other module can import
export default displayFilm;
```
