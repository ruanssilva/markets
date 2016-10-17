// Set up
var express = require('express');
var app = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');

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
    range : Number,
});

var Categoria = mongoose.model('categoria', {
    supermercado_id: String,
    nome: String,
    descricao: String
});

var Produto = mongoose.model('produto', {
    produtoid: String,
    nome: String,
    descricao: String,
    preco: Number
});


// Get supermercado
app.get('/api/supermercado', function (req, res) {
    // use mongoose to get all reviews in the database
    Supermercado.find(function (err, reviews) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)

        res.json(reviews); // return all reviews in JSON format
    });
});

app.get('/api/supermercado/:id', function (req, res) {

    console.log('get: supermercado/id');
    // use mongoose to get all reviews in the database
    Supermercado.findOne({ _id : req.params.id },function (err, reviews) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)

        res.json(reviews); // return all reviews in JSON format
    });
});

// Get categoria
app.get('/api/categoria', function (req, res) {
    // use mongoose to get all reviews in the database
    Categoria.find(function (err, reviews) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)

        res.json(reviews); // return all reviews in JSON format
    });
});

app.get('/api/categoria/supermercado/:id', function (req, res) {
    console.log('get: categoria/supermercado/id');
    Categoria.find({ supermercado_id : req.params.id },function (err, result) {
        if (err)
            res.send(err);
        res.json(result);
    });
});

// Post categoria
app.post('/api/categoria', function (req, res) {
    Categoria.create({
        supermercado_id: req.body.supermercado_id,
        nome: req.body.nome,
        descricao: req.body.descricao
    }, function (err, review) {
        if (err)
            res.send(err);
        Categoria.find(function (err, reviews) {
            if (err)
                res.send(err)
            res.json(reviews);
        });
    });
});

// Get produto
app.get('/api/produto', function (req, res) {
    // use mongoose to get all reviews in the database
    Produto.find(function (err, reviews) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)

        res.json(reviews); // return all reviews in JSON format
    });
});

app.post('/api/produto', function (req, res) {
    Produto.create({
        produtoid: req.body.produtoid,
        nome: req.body.nome,
        descricao: req.body.descricao,
        preco: req.body.preco,
    }, function (err, review) {
        if (err)
            res.send(err);
        Produto.find(function (err, reviews) {
            if (err)
                res.send(err)
            res.json(reviews);
        });
    });
});

// delete a review
app.delete('/api/produto/:_id', function (req, res) {
    Review.remove({
        _id: req.params._id
    }, function (err, review) {

    });
});


// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");