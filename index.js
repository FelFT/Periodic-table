const express = require('express');
const morgan = require('morgan');

const app = express();

//midlewares - routes - stactic files - start server 

app.use(morgan('dev'));

app.use(express.json({limit:'50mb'}));

//routes
//post get put delete
app.get('/', (req, res)=>{
    res.json({message:'Bienvenido a nuestro servidor'})
})

//static files

//start
app.listen(3000, ()=>{
    console.log('Servidor esta corriendo en el puerto', 3000
)})


