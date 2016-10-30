// Set up
var express = require('express');
var app = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');
var csv = require("fast-csv");

// Configuration
mongoose.connect('mongodb://localhost/webmart');

app.use(morgan('webmart'));                                         // log every request to the console
app.use(bodyParser.urlencoded({ 'extended': 'true' }));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Models

var Supermercado = mongoose.model('supermercado', {
    nome: String,
    descricao: String,
    longitude: String,
    latitude: String,
    range: Number,
});

var Categoria = mongoose.model('categoria', {
    supermercado_id: String,
    nome: String,
    descricao: String
});

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

var Disponibilidade = mongoose.model('disponibilidade', {
    supermercado_id: String,
    dia: String,
    hora: String,
    lotacao: Number
});

var Carrinho = mongoose.model('carrinho', {
    supermercado_id: String,
    compras: [{
        produto_id: String,
        quantidade: Number,
        valor: Number
    }],
    horario: String
});


app.get('/api/teste', function (req, res) {
    console.log('get: api/teste/');

    csv
        .fromPath("g://my.csv")
        .on("data", function (data) {
            console.log(data);

            Produto.create({
                supermercado_id: req.body.supermercado_id,
                categoria_id: data[6],
                codigo: data[0],
                nome: data[1],
                descricao: data[2],
                unidade: data[4] == "1",
                peso: data[5] == "1",
                preco: Number(data[3]) 
            }, function (err, data) {
                if (err)
                    console.log(err);
            });

        })
        .on("end", function () {
            console.log("done");
        });

    res.json(null);
});

// Get supermercado
app.get('/api/supermercado', function (req, res) {
    console.log('get: api/supermercado/');
    Supermercado.find(function (err, data) {
        if (err)
            res.send(err)

        res.json(data);
    });
});

// Get supermercado
app.get('/api/supermercado/:id', function (req, res) {

    console.log('get: api/supermercado/id');
    Supermercado.findOne({ _id: req.params.id }, function (err, data) {
        if (err)
            res.send(err)

        res.json(data);
    });
});

// Get categoria
app.get('/api/categoria', function (req, res) {
    console.log('get: api/categoria/');
    Categoria.find(function (err, data) {
        if (err)
            res.send(err)
        res.json(data);
    });
});

// Get categoria
app.get('/api/categoria/supermercado/:id', function (req, res) {
    console.log('get: api/categoria/supermercado/id');
    Categoria.find({ supermercado_id: req.params.id }, function (err, result) {
        if (err)
            res.send(err);
        res.json(result);
    });
});

// Post categoria
app.post('/api/categoria', function (req, res) {
    console.log('post: api/categoria/');
    Categoria.create({
        supermercado_id: req.body.supermercado_id,
        nome: req.body.nome,
        descricao: req.body.descricao
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

// Get produto
app.get('/api/produto', function (req, res) {
    console.log('get: api/produto/');
    Produto.find(function (err, data) {
        if (err)
            res.send(err);

console.log(data);

        res.json(data);
    });
});

// Get produto
app.get('/api/produto/categoria/:id', function (req, res) {
    console.log('get: api/produto/categoria/id');
    Produto.find({ categoria_id: req.params.id }, function (err, result) {
        if (err)
            res.send(err);
        res.json(result);
    });
});

// Post produto
app.post('/api/produto', function (req, res) {
    console.log('post: api/produto/');
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


// Post disponibilidade
app.post('/api/disponibilidade', function (req, res) {
    console.log('post: api/disponibilidade/');
    Disponibilidade.create({
        supermercado_id: req.body.supermercado_id,
        dia: req.body.dia,
        hora: req.body.hora,
        lotacao: req.body.lotacao,
    }, function (err, data) {
        if (err)
            res.send(err);
        res.json(data);
    });
});

// Get disponibilidade
app.get('/api/disponibilidade/:id', function (req, res) {

    console.log('get: api/disponibilidade/id');
    Disponibilidade.findOne({ _id: req.params.id }, function (err, data) {
        if (err)
            res.send(err)

        res.json(data);
    });
});

// Get disponibilidade
app.get('/api/disponibilidade/supermercado/:id', function (req, res) {
    console.log('get: api/disponibilidade/supermercado/id');
    Disponibilidade.find({ supermercado_id: req.params.id }, function (err, result) {
        if (err)
            res.send(err);
        res.json(result);
    });
});


// Get carrinho
app.get('/api/carrinho/:id', function (req, res) {
    console.log('get: api/carrinho/id');
    if (req.params.id != 'null')
        Carrinho.findOne({ _id: req.params.id }, function (err, data) {
            if (err)
                res.send(err);
            res.json(data);
        });
    else
        res.json(null);
});

// Post carrinho
app.post('/api/carrinho', function (req, res) {
    console.log('post: api/carrinho/');
    Carrinho.create({
        supermercado_id: req.body.supermercado_id,
        compras: req.body.compras,
        horario: req.body.horario
    }, function (err, data) {
        if (err)
            res.send(err);
        res.json(data);
    });
});

// Put carrinho
app.put('/api/carrinho', function (req, res) {
    console.log('put: api/carrinho/');
    Carrinho.update({ _id: req.body._id }, {
        supermercado_id: req.body.supermercado_id,
        compras: req.body.compras,
        horario: req.body.horario
    }, function (err, data) {
        if (err)
            res.send(err);
        res.json(data);
    });
});


app.listen(8080);
console.log("App listening on port 8080");