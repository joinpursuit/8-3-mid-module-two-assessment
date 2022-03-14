/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
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
  if (!movies.length) {
    throw `The 'input array is empty`;
  }
  let movieTitles = [];
  movieTitles = movies.map((movie) => {
    return movie.title;
  });
  return movieTitles;
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
function checkIfAnyMovieHasRating(movies, rating = "G") {
  if (!movies.length) {
    throw `The 'input array is empty`;
  }
  const ratedMovies = movies.some((movie) => {
    if (movie.rated === rating) {
      return true;
    }
    return false;
  });
  return ratedMovies;
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
  if (!movies.length) {
    throw `the input array is empty`;
  }
  let movieFound = movies.find((movie) => {
    if (movie.imdbID === id) {
      return movie;
    }
  });
  if (movieFound === undefined) {
    movieFound = null;
  }
  return movieFound;
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
 * inputs? movies and genre
 * movie is an array of objects
 * genre is a string
 * see if our input genre matches a genre inside movies.genre (string)
 * how do we match genre? split movies.genre string into an array? then compare it with the input.
 * if they match, return an array of objects 
 * returns an array of objects
 */
function filterByGenre(movies, genre) {
  if (!movies.length) {
    throw `the input array is empty`;
  }
  if (typeof genre === "string") {
    genre = genre.toLowerCase();
  }
  let returnArray = [];
  const filteredMoviesArray = movies.filter((movie) => {
    let genreString = movie.genre.toLowerCase();
    if (genreString.includes(genre)) {
      return returnArray.push(movie);
    }
  });
  return filteredMoviesArray;
}

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
  if (!movies.length) {
    throw `the input array is empty`;
  }
  let convertYearToNumber = ((string) => {
    let newArray = string.split(" ");
    let getYear = Number(newArray[2]);
    return getYear;
  })
  let filteredMoviesArray = movies.filter((movie) => {
    if (convertYearToNumber(movie.released) <= year) {
      return movie;
    }
  });
  return filteredMoviesArray;
}

/**
 * checkMinMetascores()
 * -----------------------------
 * Returns either true or false depending whether all movies have a minimum metascore. If the movie array is empty, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} metascore - A minimum metascore number. (e.g. 80)
 * @returns {Boolean|Error} A boolean that indicates whether all movies have a metascore above the minimum threshhold
 *
 * NOTE: You must use the .every()` method.
 *
 * EXAMPLE:
 *  checkMinMetascores(movies, 90));
 *  //>  false
 */
function checkMinMetascores(movies, metascore) {
  if (!movies.length) {
    throw `input array is empty`;
  }
  const isAboveMinMetascores = movies.every((movie) => {
    if (movie.metascore > metascore) {
      return true;
    }
    return false;
  });
  return isAboveMinMetascores;
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

    if ratings[i].source === "Rotten Tomatoes" 
    let rottenTomatoesRating = ratings[i].value
 */
function getRottenTomatoesScoreByMovie(movies) {
  if (!movies.length) {
    throw `input array is empty`;
  } 
  return movies.map((movie) => {
    let ratingsArray = movie.ratings
    let rottenTomatoesRating = ratingsArray.find((rating) => {
      return rating.source === "Rotten Tomatoes";
    });
    let movieTitleAndRating = {};
    movieTitleAndRating[movie.title] = rottenTomatoesRating.value;
    return movieTitleAndRating
  });
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
