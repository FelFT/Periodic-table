const express = require('express');
const morgan = require('morgan');
const  enrutador  = require('./routes/routes');
const db = require('./models/index');

const app = express();

db.sequelize.sync();

//Para eliminar las tablas o vaciar y aplicar cambios
//db.sequelize.sync({force: true}).then(()=>{
//    console.log('Tablas restablecidas');
//});

//midlewares - routes - stactic files - start server 

app.use(morgan('dev'));

app.use(express.json({limit:'50mb'}));

//routes
//post get put delete
app.use('/api/table', enrutador);

//static files

//start
app.listen(3000, ()=>{
    console.log('Servidor esta corriendo en el puerto', 3000
)})


