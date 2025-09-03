const express = require('express')
const router = express.Router()
const exampleController = require('../controller/exampleController');
const {Sample} = exampleController
router.get('/backend',Sample);

module.exports=router