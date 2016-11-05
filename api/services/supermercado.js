var express = require('express');
var router = express.Router()
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

var Supermercado = require('./models/supermercado')

router.use(function (req, res, next) {

    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    req.body.usuario = null;
    if (token) {
        jwt.verify(token, 'secret', function (err, decoded) {
            if (!err)
                req.usuario = decoded;
            next();
        });
    } else {
        next();
    }

});


router.get('/', function (req, res) {
    console.log((req.usuario != null ? req.usuario.nome : "someone") + ' using get: api/supermercado/');
    Supermercado.find(function (err, data) {
        if (err)
            res.send(err)

        res.json(data);
    });
});

router.get('/:id', function (req, res) {

    console.log((req.usuario != null ? req.usuario.nome : "someone") + ' using get: api/supermercado/id');
    Supermercado.findOne({ _id: req.params.id }, function (err, data) {
        if (err)
            res.send(err)

        res.json(data);
    });
});


module.exports = router