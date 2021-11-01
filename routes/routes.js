const express = require('express');

const enrutador = express.Router();

const elements = require('../controllers/elements.js');

enrutador
    .route('/elements')
    .get(elements.getElements)
    .post(elements.createElements);

enrutador
    .route('/elements/:id')
    .put(elements.updateElements);

module.exports = enrutador;
