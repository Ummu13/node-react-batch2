const express = require("express");
const {createMovie, readMovie , readMovieById, updateMovie, deleteMovie} = require("../controllers/moviecontrollers");
const router = express.Router();

//router.get("/movie/:id", getMoviesByID);

router.post('/movie', createMovie)
router.get('/movie', readMovie)
router.get('/movie/:id', readMovieById)
router.put('/movie/:id', updateMovie)
router.delete('/movie/:id', deleteMovie)

module.exports = { router };

