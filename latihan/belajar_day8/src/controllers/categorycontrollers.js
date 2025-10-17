//import { PrismaClient, Prisma } from './generated/prisma'
//const prisma = new PrismaClient()
const { PrismaClient } = require('../../generated/prisma')
const prisma = new PrismaClient()

//creat (mengirim atau menginput data ke database)
const createCategory = async (req, res) => {
  let {name} = req.body
    try{    
      const category = await prisma.category.create({
        data: {name}
      })
        res.json({
          info:category,
          message: "category Was Succesfully",
          status: "success" 
      })
      return
    } catch (err){
      res.json({
          info:null,
          message: "category was failed to created",
          status: "failed" 
      })

}}

//read categpry (menampilkan semua data)
const readCategory = async (req, res) => {
  const category = await prisma.category.findMany()
  try{    
    res.json({
      info :category,
      message: "category Was Succesfully",
      status: "success"
    })
    return
  }catch (err){
      res.json({
          info:null,
          message: "category was failed to created",
          status: "failed" 
     })  
}}  

//read category by id (menampilkan data berdasarkan id)
const readCategoryById= async(req, res) => {
  let {id} = req.params
  try{
    const category = await prisma.category.findFirst({
      where: {id: Number(id)}
    })
    if(category){
      message = "category Was Succesfully"
      stat = "success"
      status = 200
    }else{
      message = "category was failed to created"
      stat = "Not Found"
      status = 404
    } 
    res.status(status).json({
      info :category,
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
const updateCategory = async(req, res) => {
  let {id} = req.params
  let {title, year} = req.body
  try{
    const category = await prisma.category.update({
      where: {id: Number(id),},
      data: {title,year},
    })
      res.json({
        info:category,
        message: "category Was Succesfully",
        status: "success"        
        })
        return
  }catch (err){
      res.json({
        info:null,
        message: "category was failed to created",
        status: "failed" 
      })
}}


//Hapus data (menghapus data didatabase berdasarkan id)
const deleteCategory = async (req, res) => {
  let {id} = req.params
  try{
  const category = await prisma.category.delete({
    where: {id: Number(id)}
  })
    res.json({
      info :category,
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

module.exports = {createCategory, readCategory, readCategoryById, updateCategory, deleteCategory }
