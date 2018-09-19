const express = require('express');
const router = express.Router();

const residente_controller = require('../controllers/residente.controller');

router.get('/residente', residente_controller.test);

module.exports = router;
