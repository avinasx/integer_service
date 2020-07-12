const express = require('express');
const router = express.Router();
const V1 = require('../models/v1');
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');
const multer = require('multer');

const V1Controller = require('../controllers/v1');


router.get('/reset/:integer', checkAuth, V1Controller.reset);
router.get('/current/', checkAuth, V1Controller.current);
router.put('/current/', checkAuth, V1Controller.current_put);
router.get('/next/', checkAuth, V1Controller.next);



module.exports = router;