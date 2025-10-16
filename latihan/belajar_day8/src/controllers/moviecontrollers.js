//import { PrismaClient, Prisma } from './generated/prisma'
//const prisma = new PrismaClient()
const { PrismaClient } = require('../../generated/prisma')
const prisma = new PrismaClient()

//creat (mengirim atau menginput data ke database)
const createMovie = async (req, res) => {
  let {title, year} = req.body
    try{    
      const movies = await prisma.movies.create({
        data: { title,year}
      })
        res.json({
          info:movies,
          message: "Movie Was Succesfully",
          status: "success" 
      })
      return
    } catch (err){
      res.json({
          info:null,
          message: "Movie was failed to created",
          status: "failed" 
      })

}}

//read movie (menampilkan semua data)
const readMovie = async (req, res) => {
  const movies = await prisma.movies.findMany()
  try{    
    res.json({
      info :movies,
      message: "Movie Was Succesfully",
      status: "success"
    })
    return
  }catch (err){
      res.json({
          info:null,
          message: "Movie was failed to created",
          status: "failed" 
     })  
}}  

//read movie by id (menampilkan data berdasarkan id)
const readMovieById= async(req, res) => {
  let {id} = req.params
  try{
    const movies = await prisma.movies.findFirst({
      where: {id: Number(id)}
    })

    if(movies){
      message = "Movie Was Succesfully"
      stat = "success"
      status = 200
    }else{
      message = "Movie was failed to created"
      stat = "Not Found"
      status = 404
    } 
    res.status(status).json({
      info :movies,
      message:message,
      status: stat
    })
  }catch (err){
      res.json({
          info:null,
          message:message,
          status: stat 
     })  
}}

//Update data (memperbarui data berdasarkan id)
const updateMovie = async(req, res) => {
  let {id} = req.params
  let {title, year} = req.body
  try{
    const movies = await prisma.movies.update({
      where: {id: Number(id),},
      data: {title,year},
    })
      res.json({
        info:movies,
        message: "Movie Was Succesfully",
        status: "success"        
        })
        return
  }catch (err){
      res.json({
        info:null,
        message: "Movie was failed to created",
        status: "failed" 
      })
}}


//Hapus data (menghapus data didatabase berdasarkan id)
const deleteMovie = async (req, res) => {
  let {id} = req.params
  try{
  const movies = await prisma.movies.delete({
    where: {id: Number(id)}
  })
    res.json({
      info :movies,
      message: "Delete Was Succesfully",
      status: "success"
    })
    return
  }catch (err){
      res.json({
          info: null,
          message: "Delete was failed",
          status: "failed" 
     })  
}}

module.exports = {createMovie, readMovie, readMovieById, updateMovie, deleteMovie }
//module.exports = {getMoviesByID}