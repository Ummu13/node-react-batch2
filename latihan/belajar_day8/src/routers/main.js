const express = require("express");
const {createMovie, readMovie , readMovieById, updateMovie, deleteMovie} = require("../controllers/moviecontrollers");
const { basicAuth } = require("../middleware/basicAuth");
const router = express.Router();

//router.get("/movie/:id", getMoviesByID);

router.post('/movie', basicAuth, createMovie)
router.get('/movie', readMovie)
router.get('/movie/:id', readMovieById)
router.put('/movie/:id', basicAuth, updateMovie)
router.delete('/movie/:id', basicAuth, deleteMovie)

module.exports = { router };

