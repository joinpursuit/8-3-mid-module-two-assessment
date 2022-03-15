/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const movies = require("./movies");
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
  let titledMovies = [] //created a blank array for the returned titles
  
  if (!movies.length) {
    throw "No movie was found." //throw error created should a movie array not be present. The throw error is present before the mapped code in order to catch errors in the block before it gets to the important function. If the movies array contains no entry, the error is activated.
  }

  movies.map(movie => {
    titledMovies.push(movie.title) //using map, a callback fn is used to push all titled movies into the new array.
  })
  
  return titledMovies //returns the pushed array
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
function checkIfAnyMovieHasRating(movies, rating) {
  if (!movies.length) {
  throw "No movie was found." //a throw for if there is no movie listed at all. The throw error is present before the mapped code in order to catch errors in the block before it gets to the important function. If the movies array contains no entry, the error is activated.
}

let ratingToUse = rating ? rating : "G" // I need to check if the rating parameter exists. If it exists, then it is compared to see if it is equivalent to the default rating given.

  return movies.some((movie) => {return movie.rated === ratingToUse})
//some method which tells you true if any of the movies listed has a G rating. 
  
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
    throw "Movie could not be found." //throw error created should there be no movies. The throw error is present before the mapped code in order to catch errors in the block before it gets to the important function. If the movies array contains no entry, the error is activated.
}
  
return movies.find((movie) => {
    return movie.imdbID === id
      }) || null //if the given movie via its ID cannot be found, return null.
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
  if (!movies.length) {
    throw "Movie cannot be found." //throw error made should there be no movies. The throw error is present before the mapped code in order to catch errors in the block before it gets to the important function. If the movies array contains no entry, the error is activated.
  }
  return movies.filter((movie) => {
    return movie.genre.toUpperCase().includes(genre.toUpperCase())
  }) //here the movies array is filered to return a case-senstive way of identifying the movie by its specific genre. Being that genre is a string, multiple string methods are employed in order to ensure punctuation carries over from the given variable.
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
    throw "Movie could not be found." //created throw error. The throw error is present before the mapped code in order to catch errors in the block before it gets to the important function. If the movies array contains no entry, the error is activated.
  }


return movies.filter((movie) => {
 const splitYear = movie.released.split(" ")
  return parseInt(splitYear[2]) <= year
}) // a new variable was created in order to house just the year from the movie.released string. I then return a coversion of that string into a number and  compare it to see if its less than or equal to the given year value
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
    throw "Movie cannot be found." //Created throw error. The throw error is present before the mapped code in order to catch errors in the block before it gets to the important function. If the movies array contains no entry, the error is activated.
  }

  return movies.every((movie) => {
    return movie.metascore > metascore ? true : false
  }) //.every is used here to return any movie with a metascore with an equivalence to the given metascore value to be logged. Should the juxtaposed movie contain a metascore within the given range, it will log true. Otherwise, it will log false.
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
  if (!movies.length) {
    throw "Movie cannot be found."
  }
let transformedMovie = {}
//ratings is an array of objects.

  return movies.map((movie) => {
    return movies.find((movie) => {
      return movie.rating.source === 'Rotten Tomatoes' ? value : undefined
    })
  })
//find movies.rating.source === rottentomatoes?...

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
