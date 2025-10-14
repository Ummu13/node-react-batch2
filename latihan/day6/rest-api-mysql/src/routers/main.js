const express = require("express");
const { getMoviesByID } = require("../controllers/moviecontrollers");
const router = express.Router();

router.get("/movie/:id", getMoviesByID);

module.exports = { router };
