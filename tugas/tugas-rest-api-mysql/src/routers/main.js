const express = require("express");
const {createNilaiMahasiswa, readNilaiMahasiswa, readNilaiMahasiswaById, updateNilaiMahasiswa, deleteNilaiMahasiswa} = require("../controllers/moviecontrollers");
const router = express.Router();

//router.get("/movie/:id", getMoviesByID);

router.post('/mahasiswa', createNilaiMahasiswa)
router.get('/mahasiswa', readNilaiMahasiswa)
router.get('/mahasiswa/:id', readNilaiMahasiswaById)
router.put('/mahasiswa/:id', updateNilaiMahasiswa)
router.delete('/mahasiswa/:id', deleteNilaiMahasiswa)

module.exports = { router };

