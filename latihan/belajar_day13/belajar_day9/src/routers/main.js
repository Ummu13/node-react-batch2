const express = require("express");
const {createMovie, readMovie , readMovieById, updateMovie, deleteMovie} = require("../controllers/moviecontrollers");
//const { basicAuth } = require("../middleware/basicAuth");
const { createCategory, readCategory, readCategoryById, updateCategory, deleteCategory } = require("../controllers/categorycontrollers");
const { register, login } = require("../controllers/usercontrollers");
const { authJWT } = require("../middleware/auth");
const router = express.Router();

//router movie controllers
router.post('/movie', createMovie)
router.get('/movie', readMovie)
router.get('/movie/:id', readMovieById)
router.put('/movie/:id', updateMovie)
router.delete('/movie/:id', deleteMovie)

//router category controllers
router.post('/category', createCategory)
router.get('/category', readCategory)
router.get('/category/:id', readCategoryById)
router.put('/category/:id',  updateCategory)
router.delete('/category/:id', deleteCategory)
module.exports = { router };

// Login
router.post('/register', register)
router.post('/login', login)

