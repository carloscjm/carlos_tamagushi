const express = require('express');
const router = express.Router();

const HomeController = require('../src/controllers/homeController');
const creaturesController = require('../src/controllers/creature_list');

router.get('/', HomeController.index);
router.get('/lista_bichos', creaturesController.creature_list);

module.exports = router;
