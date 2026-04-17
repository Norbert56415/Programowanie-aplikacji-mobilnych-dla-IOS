const movies = [
  { title: "Arrival", category: "sci-fi", rating: 8.1, watched: true },
  { title: "Whiplash", category: "drama", rating: 8.5, watched: false },
  { title: "Dune", category: "sci-fi", rating: 8.0, watched: false },
  { title: "Inside Out", category: "animation", rating: 8.1, watched: true }
];

const moviesToWatch = movies.filter(movie => !movie.watched);
console.log(moviesToWatch);

const moviesMoreThan8 = movies.filter(movie => movie.rating > 8);
console.log(moviesMoreThan8);

const nameMovies = movies.map(movie => movie.title);
console.log(nameMovies);

//tutuły do raportu 
const toWatchTitles = moviesToWatch.map(movie => movie.title);
const topRatedTitles = moviesMoreThan8.map(movie => movie.title);

console.log(`
Twoja lista filmów: ${nameMovies.join(", ")}
Filmy do obejrzenia: ${toWatchTitles.join(", ")}
Filmy z oceną > 8: ${topRatedTitles.join(", ")}

`);
