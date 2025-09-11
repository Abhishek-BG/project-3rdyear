const express = require('express')
const router = express.Router()
const authController = require('../controller/authController')
const adminController = require('../controller/adminController')
const authenticateMiddleware = require('../middleware/authenticateMiddleware');
const {verifyAdmin} = authenticateMiddleware;
const {adminLogin,adminRegister,adminChangePass} = authController;
const {getAllUsers,addGenre,addMovie,viewGenre,viewMovies,
    editMovies,
    deleteGenre,
    editGenre
} = adminController;

router.post('/register',adminRegister);
router.post('/login',adminLogin); //generate Token
router.get('/allUsers',verifyAdmin,getAllUsers); //middleware to check the token
router.post('/addMovie',verifyAdmin,addMovie)
router.post('/genre',verifyAdmin,addGenre);
router.patch('/genre/:id',verifyAdmin,editGenre);
router.delete('/genreDelete/:id',verifyAdmin,deleteGenre);
router.get('/viewGenre',verifyAdmin,viewGenre)
router.put('/changePass/:id',verifyAdmin,adminChangePass);
router.get('/viewMovies',verifyAdmin,viewMovies)
router.patch('/editMovie/:id',verifyAdmin,editMovies);

module.exports = router;