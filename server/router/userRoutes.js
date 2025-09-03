const express = require('express')
const router = express.Router()
const authController = require('../controller/authController')
const {userRegister,userLogin} = authController;

router.post('/register',userRegister);
router.post('/login',userLogin);
router.get('/viewAllMovies',(req,res)=>{res.send(201)})
router.get('/viewAllGenre',(req,res)=>{res.send(201)})
router.get('/movies/:genre',(req,res)=>{res.send(201)})
router.get('/viewMovie/:id',(req,res)=>{res.send(201)})
router.post('/rating',(req,res)=>{res.send(201)})
router.get('/search',(req,res)=>{res.send(201)})

module.exports = router;