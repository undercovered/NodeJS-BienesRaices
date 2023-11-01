const express = require('express'); //CommonJS
// import express from 'express'; sintaxis module
// Crear la APP
const router = express.Router();

router.get('/', function(req, res) {
    res.send("Hola mundo en express")
});

router.post('/', function(req, res) {
    res.json({msg: "Respuesta tipo post"})
});

router.route('/nosotros')
    .get((req, res) => {
        res.json({msg: "Respuesta tipo get"})
    })
    .post((req, res) => {
        res.json({msg: "Respuesta tipo post"})
    })

module.exports = router