const express = require('express');
const router = express.Router();

const sitesController = require('../controllers/SiteController');

router.use('/contact', sitesController.contact);
router.use('/', sitesController.index);


module.exports = router;