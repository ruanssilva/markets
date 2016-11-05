var express = require('express');
var router = express.Router()
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

var Usuario = require('./models/usuario')

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


router.get('/email/:email', function (req, res) {
    console.log((req.usuario != null ? req.usuario.nome : "someone") + ' using get: api/usuario/email/:email');
    Usuario.findOne({ email: req.params.email }, function (err, data) {
        if (err)
            res.send(err)
        res.json(data);
    });
});

router.get('/:id', function (req, res) {
    console.log((req.usuario != null ? req.usuario.nome : "someone") + ' using get: api/usuario/:id');
    Usuario.findOne({ _id: req.params.id }, function (err, data) {
        if (err)
            res.send(err)
        res.json(data);
    });
});

router.post('/', function (req, res) {
    console.log((req.usuario != null ? req.usuario.nome : "someone") + ' using post: api/usuario/');
    Usuario.create({
        email: req.body.email,
        senha: req.body.senha,
        nome: req.body.nome,
        sexo: req.body.sexo,
        cpf: req.body.cpf,
        nascimento: req.body.nascimento,
        telefone: req.body.telefone,
        celular: req.body.celular,
        enderecos: req.body.enderecos,
    }, function (err, data) {
        if (err)
            res.send(err);
        res.json(data);
    });
});

module.exports = router