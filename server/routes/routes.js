const express = require('express');

const enrutador = express.Router();

const elements = require('../controllers/elements.js');
const estado = require('../controllers/states.js')
const tipo = require('../controllers/types');
const periodo = require('../controllers/periods');
const grupo = require('../controllers/groups');


//rutas para elementos
enrutador
    .route('/elements')
    .get(elements.getElements)
    .post(elements.createElements);

enrutador
    .route('/elements/:id')
    .put(elements.updateElements)
    .delete(elements.deleteElement);

//rutas para estados
enrutador
    .route('/estados')
    .get(estado.getEstados)
    .post(estado.createEstados);

enrutador
    .route('/estados/:id')
    .put(estado.updateEstados)
    .delete(estado.deleteEstados);

//rutas para tipos
enrutador
    .route('/tipos')
    .get(tipo.getTipos)
    .post(tipo.createTipos);

enrutador
    .route('/tipos/:id')
    .put(tipo.updateTipos)
    .delete(tipo.deleteTipos);

//rutas para grupos
enrutador
    .route('/grupos')
    .get(grupo.getGrupos)
    .post(grupo.createGrupos);

enrutador
    .route('/grupos/:id')
    .put(grupo.updateGrupos)
    .delete(grupo.deleteGrupos);

//rutas para periodos
enrutador
    .route('/periodos')
    .get(periodo.getPeriodos)
    .post(periodo.createPeriodos);

enrutador
    .route('/periodos/:id')
    .put(periodo.updatePeriodos)
    .delete(periodo.deletePeriodos);

module.exports = enrutador;
