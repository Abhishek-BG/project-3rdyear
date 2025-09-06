const express = require('express')
const router = express.Router()
const authController = require('../controller/authController')
const adminController = require('../controller/adminController')
const authenticateMiddleware = require('../middleware/authenticateMiddleware');
const {verifyAdmin} = authenticateMiddleware;
const {adminLogin,adminRegister,adminChangePass} = authController;
const {getAllUsers} = adminController;

router.post('/register',adminRegister);
router.post('/login',adminLogin); //middleware passed
router.get('/allUsers',verifyAdmin,getAllUsers);
router.post('/addMovie',verifyAdmin,(req,res)=>{res.send(201)})
router.post('/genre',verifyAdmin,(req,res)=>{res.send('genre')})
router.get('/viewGenre',verifyAdmin,(req,res)=>{res.send(201)})
router.put('/changePass/:id',verifyAdmin,adminChangePass);
router.get('/viewMovies',verifyAdmin,(req,res)=>{res.send(201)})
router.patch('/editMovie',verifyAdmin,(req,res)=>{res.send(201)})

module.exports = router;