var express = require('express');
var router = express.Router()
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');


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

router.get('/:id', function (req, res) {
    console.log((req.usuario != null ? req.usuario.nome : "someone") + ' using get: api/carrinho/id');
    if (req.params.id != 'null')
        Carrinho.findOne({ _id: req.params.id }, function (err, data) {
            if (err)
                res.send(err);
            res.json(data);
        });
    else
        res.json(null);
});

router.post('/', function (req, res) {
    console.log((req.usuario != null ? req.usuario.nome : "someone") + ' using post: api/carrinho/');
    Carrinho.create({
        supermercado_id: req.body.supermercado_id,
        compras: req.body.compras,
        usuario_id: req.body.usuario_id,
        horario: req.body.horario
    }, function (err, data) {
        if (err)
            res.send(err);
        res.json(data);
    });
});

router.put('/', function (req, res) {
    console.log((req.usuario != null ? req.usuario.nome : "someone") + ' using put: api/carrinho/');
    Carrinho.update({ _id: req.body._id }, {
        compras: req.body.compras,
        usuario_id: req.body.usuario_id
    }, function (err, data) {
        if (err)
            res.send(err);
        res.json(data);
    });
});

module.exports = router