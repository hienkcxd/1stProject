const express = require('express');
const router = express.Router();

const productsController = require('../controllers/ProdudctsController');

router.use('/:slug', productsController.show);
router.use('/', productsController.index);



module.exports = router;