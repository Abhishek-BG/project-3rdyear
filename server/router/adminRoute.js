const express = require('express')
const router = express.Router()
const authController = require('../controller/authController')
const {adminLogin,adminRegister} = authController;
router.post('/register',adminRegister);
router.post('/login',adminLogin);
router.post('/addMovie',(req,res)=>{res.send(201)})
router.post('/genre',(req,res)=>{res.send(201)})
router.get('/viewGenre',(req,res)=>{res.send(201)})
router.put('/changePass',(req,res)=>{res.send(201)})
router.get('/viewMovies',(req,res)=>{res.send(201)})
router.patch('/editMovie',(req,res)=>{res.send(201)})

module.exports = router;