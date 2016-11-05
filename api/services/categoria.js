var express = require('express');
var router = express.Router()
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

var Categoria = require('./models/categoria')

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
    console.log((req.usuario != null ? req.usuario.nome : "someone") + ' using get: api/categoria/');
    Categoria.find(function (err, data) {
        if (err)
            res.send(err)
        res.json(data);
    });
});

router.get('/supermercado/:id', function (req, res) {
    console.log((req.usuario != null ? req.usuario.nome : "someone") + ' using get: api/categoria/supermercado/id');
    Categoria.find({ supermercado_id: req.params.id }, function (err, result) {
        if (err)
            res.send(err);
        res.json(result);
    });
});

router.get('/supermercado/:supermercado/tipo/:tipo', function (req, res) {
    console.log((req.usuario != null ? req.usuario.nome : "someone") + ' using get: api/categoria/supermercado/:supermercado/tipo/:tipo');
    Categoria.find({ tipo: req.params.tipo, supermercado_id: req.params.supermercado }, function (err, result) {
        if (err)
            res.send(err);
        res.json(result);
    });
});

router.post('/api/categoria', function (req, res) {
    console.log((req.usuario != null ? req.usuario.nome : "someone") + ' using post: api/categoria/');
    Categoria.create({
        supermercado_id: req.body.supermercado_id,
        nome: req.body.nome,
        descricao: req.body.descricao,
        tipo: String
    }, function (err, data) {
        if (err)
            res.send(err);
        Categoria.find(function (err, data) {
            if (err)
                res.send(err)
            res.json(data);
        });
    });
});


module.exports = router