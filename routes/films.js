const filmsController = require('../controllers/films.controller');
const router = require('express').Router();

// GET http://localhost:3000/api/film/title
router.get("/:title", filmsController.getFilmByTitle);

// Post http://localhost:3000/api/film
// {
//       "Title": "Test Movie",
//       "Author": "Test Author",
//       "Description": "Test Description",
//       "Src": "test.png"
// }
router.post('/', filmsController.createFilm);

// PUT http://localhost:3000/api/film
router.put('/', filmsController.editFilm);

// DELETE http://localhost:3000/api/film
router.delete('/', filmsController.deleteFilm);

module.exports = router;