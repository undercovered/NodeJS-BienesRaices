const express = require('express'); //CommonJS
// import express from 'express'; sintaxis module

const usuario = require('./routes/usuario.js')
// Crear la APP
const app = express();

//  Routing
// import express from 'express'; sintaxis module
// Crear la APP
app.use('/',usuario)
app.use('/nosotros',usuario)


// Definir un puerto y arrancar el proyecto

const port = 8080;

app.listen(port, () => {
    console.log("Corriendo en el puerto " + port)
})