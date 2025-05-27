const movieList = [];

function addMovie(title, year, genre) {
  if (!title || isNaN(year) || !genre) {
    console.error("Invalid input. Please provide valid movie details.");
    return;
  }
  const movie = {
    title: title.trim(),
    year: year,
    genre: genre.trim()
  };
  movieList.push(movie);
  console.log(`Movie added: ${title.trim()} (${year}) - ${genre.trim()}`);
}
addMovie("Zootopia", 2016, "Animation");

function listMovies() {
  if (movieList.length === 0) {
    console.log("No movies in the list.");
    return;
  }
  console.log("Movie List:");
  movieList.forEach((movie, index) => {
    console.log(`${index + 1}. ${movie.title} (${movie.year}) - ${movie.genre}`);
  });
}
listMovies();