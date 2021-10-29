const express = require('express');

const enrutador = express.Router();

const elements = require('../controllers/elements.js');

enrutador
    .route('/elements')
    .get(elements.getElements)
    .post(elements.createElements);

module.exports = enrutador;
