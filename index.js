/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const {
  lastIndexOf,
} = require('../../ClassEx/8-3_lecture-notes/M2/mid-module-assessment/todo-data');
const movies = require('./movies');
const exampleMovies = require('./movies');
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]|Error} An array of strings, which are movie titles.
 *
 * NOTE: You must use the `.map()` method.
 * 
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  if (Object.keys(movies).length === 0) {
    throw 'Invalid data, please provide a movie.';
  }

  let movieTitles = movies.map((movie) => movie.title);
  {
    return movieTitles;
  }
}

/**
 * checkIfAnyMovieHasRating()
 * -----------------------------
 * Returns a boolean, representing whether or not any of the movies has been given the provided rating. If the inputted `movies` array is empty, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} [rating="G"] - A movie rating. Defaults to "G".
 * @returns {boolean|Error} Returns `true` if a movie exists in the list with the given rating, otherwise returns `false`.
 *
 * NOTE: You must use the `.some()` method.
 *
 * EXAMPLE:
 *  checkIfAnyMovieHasRating(movies, "G");
 *  //> true
 *
 * EXAMPLE:
 *  checkIfAnyMovieHasRating(movies, "R");
 *  //> false
 */
function checkIfAnyMovieHasRating(movies, rated) {
  if (Object.keys(movies).length === 0) {
    throw 'Invalid data, please provide a movie.';
  }

  let movieRating = movies.some((movie) => movie.rated === rated);

  if (!rated || !movies.rated) {
    /*I wasn't exactly sure how to interperet "if no rating is passed", 
    I assumed either the user inputted rating could be blank or the movies.rated field could be an empty string.
    Either way my code for those assumptions didn't pass the test or my code was just implemented incorrectly.
    So I had a little bit of difficulty with passing this test.
    */
    movies.some((movie) => (movie.rated = 'G'));
    return movieRating;
  }
  return movieRating;
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty, throw an error with a message. If the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|Error|null} The movie object with the matching `imdbID`.
 *
 * NOTE: You must use the `.find()` method.
 * 
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  if (Object.keys(movies).length === 0) {
    throw 'Invalid data, please provide a movie.';
  }

  let findMovie = movies.find((movie) => movie.imdbID === id, {});
  if (!findMovie) {
    return null;
  }
  return findMovie;
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty, throw an error with a message. If no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]|Error} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * NOTE: You must use the `.filter()` method.
 * 
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  if (Object.keys(movies).length === 0) {
    throw 'Invalid data, please provide a movie.';
  }

  for (let i = 0; i < movies.length; i++) {
    movies[i].genre.split(' ');
    return movies.filter((movie) =>
      movie.genre.toLowerCase().includes(genre.toLowerCase()),
    );
  }
}

/*return movies.filter((movie) => {
    return movie.genre.split(' ').toLowerCase() === genre.toLowerCase();
  }); */

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year. If the movie array is empty, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]|Error} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * NOTE: You must use the `.filter()` method.
 * 
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  if (Object.keys(movies).length === 0) {
    throw 'Invalid data, please provide a movie.';
  }
  for (let i = 0; i < movies.length; i++) {
    let releaseDateFormatter = movies[i].released.split(' ');
    let releaseDate = parseFloat(releaseDateFormatter[2]);
    /*Had to use two variables to perform the date convertison to seperate out the movie release year so I could compare the two years,
     I tried implementing these operations within the filter() method but had no luck in getting it to work.
      I think the problem with my code is how to set up the variable for the formatted movies.released as one of the filter arguements
     to compare to the user inputted year on the line below.*/
    releaseFilter = movies.filter(() => releaseDate <= year, {});
    return releaseFilter;
  }
}

/**
 * checkMinMetascores()
 * -----------------------------
 * Returns either true or false depending whether all movies have a minimum metascore. If the movie array is empty, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} metascore - A minimum metascore number. (e.g. 80)
 * @returns {Boolean|Error} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * NOTE: You must use the .every()` method.
 *
 * EXAMPLE:
 *  checkMinMetascores(movies, 90));
 *  //>  false
 */
function checkMinMetascores(movies, metascore) {
  if (Object.keys(movies).length === 0) {
    throw 'Invalid data, please provide a movie.';
  }
  let metascoreCheck = movies.every(
    (movie) => Number(movie.metascore) >= metascore,
    {},
  );

  return metascoreCheck;
}

/**
 * getRottenTomatoesScoreByMovie()
 * -----------------------------
 * Transform each movie, returning an array of objects where the key is the title of the movie and the value is the score received from Rotten Tomatoes. If there are no movies, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object[]|Error} An array of movie objects where the key is the movie title and the value is the score received from Rotten Tomatoes.
 * 
 * NOTE: You must use both the `.map()` method and the `.find()` method.
 *
 * EXAMPLE:
 *  getRottenTomatoesScoreByMovie(movies);
 *  //> [
      { "Toy Story 4": "97%" },
      { "Inside Out": "98%" },
      { Coco: "97%" },
      { "Incredibles 2": "93%" },
      { Moana: "95%" },
      { "How to Train Your Dragon": "99%" },
      { Paddington: "97%" },
      { "The Lion King": "93%" },
      { Fantasia: "95%" },
      { "James and the Giant Peach": "91%" },
    ];
 */
function getRottenTomatoesScoreByMovie(movies) {
  /*My best attempt at chaining the .find() and .map() methods to return an array of titles and scores,
   Pretty sure my code is off and I didn't even need to use the standard for loop to iterate the array.
   But I felt this was the best approach I could come up with to access the nested array of ratings with in movies,
   especially when I needed to make a comparison for .find() to check if the source was from "Rotten Tomatoes."*/
  if (Object.keys(movies).length === 0) {
    throw 'Invalid data, please provide a movie.';
  }
  for (let i = 0; i < movies.length; i++) {
    let found = movies.find(
      (movie) => movie.ratings[i].source === 'Rotten Tomatoes',
      {},
    );
    /*Rotten Tomatoes Score*/ found.map((movie) => {
      return { [movie.title]: movie.ratings[i].value };
    });
  }
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  checkIfAnyMovieHasRating,
  findById,
  filterByGenre,
  checkMinMetascores,
  getAllMoviesReleasedAtOrBeforeYear,
  getRottenTomatoesScoreByMovie,
};
