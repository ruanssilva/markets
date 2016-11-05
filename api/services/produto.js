var express = require('express');
var router = express.Router()
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

var Produto = mongoose.model('produto', {
    supermercado_id: String,
    categoria_id: String,
    codigo: String,
    nome: String,
    descricao: String,
    unidade: Boolean,
    peso: Boolean,
    preco: Number
});

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
    console.log((req.usuario != null ? req.usuario.nome : "someone") + ' using get: api/produto/');
    Produto.find(function (err, data) {
        if (err)
            res.send(err);

        console.log(data);

        res.json(data);
    });
});

router.get('/categoria/:id', function (req, res) {
    console.log((req.usuario != null ? req.usuario.nome : "someone") + ' using get: api/produto/categoria/:id');
    Produto.find({ categoria_id: req.params.id }, function (err, result) {
        if (err)
            res.send(err);
        res.json(result);
    });
});

router.get('/categoria/:categoria/search/:search', function (req, res) {
    console.log((req.usuario != null ? req.usuario.nome : "someone") + ' using get: api/produto/categoria/:categoria/search/:search');
    Produto.find({ categoria_id: req.params.categoria, nome: new RegExp(req.params.search, 'i') }, function (err, result) {
        if (err)
            res.send(err);
        res.json(result);
    });
});

router.post('/', function (req, res) {
    console.log((req.usuario != null ? req.usuario.nome : "someone") + ' using post: api/produto/');
    Produto.create({
        supermercado_id: req.body.supermercado_id,
        categoria_id: req.body.categoria_id,
        codigo: req.body.codigo,
        nome: req.body.nome,
        descricao: req.body.descricao,
        unidade: req.body.unidade,
        peso: req.body.peso,
        preco: req.body.preco
    }, function (err, data) {
        if (err)
            res.send(err);
        Produto.find(function (err, data) {
            if (err)
                res.send(err)
            res.json(data);
        });
    });
});

module.exports = router