const express = require('express')
const router = express.Router();

//imports
const AdminController = require('../controllers/AdminController')



//Admin
router.post('/adminSignup', AdminController.adminSignup)

module.exports = router;