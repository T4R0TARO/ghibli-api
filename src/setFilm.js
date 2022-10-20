const setFilm = (section) => {
  // console.log(section);

  section.addEventListener("click", function (e) {
    // e.preventDefault();

    const id = e.target.parentElement.dataset.id;
    localStorage.setItem("film", id);
    console.log(id);
  });
};

export default setFilm;
