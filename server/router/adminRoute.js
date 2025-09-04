const express = require('express')
const router = express.Router()
const authController = require('../controller/authController')
const adminController = require('../controller/adminController')
const {adminLogin,adminRegister,adminChangePass} = authController;
const {getAllUsers} = adminController;

router.post('/register',adminRegister);
router.post('/login',adminLogin);
router.get('/allUsers',getAllUsers);
router.post('/addMovie',(req,res)=>{res.send(201)})
router.post('/genre',(req,res)=>{res.send('genre')})
router.get('/viewGenre',(req,res)=>{res.send(201)})
router.put('/changePass/:id',adminChangePass);
router.get('/viewMovies',(req,res)=>{res.send(201)})
router.patch('/editMovie',(req,res)=>{res.send(201)})

module.exports = router;