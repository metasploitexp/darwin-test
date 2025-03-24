const { Router } = require('express');
const router = Router();
const carController = require('../controllers/car.controller');

router.get('/get-all', carController.getAll);
router.post('/create', carController.create);

module.exports = router;