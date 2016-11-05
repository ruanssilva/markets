// Set up
var express = require('express');
var app = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');
var csv = require("fast-csv");
var jwt = require('jsonwebtoken');

var birds = require('./birds')
var carrinho = require('./carrinho')
var supermercado = require('./supermercado')
var produto = require('./produto')
var categoria = require('./categoria')

var Usuario = require('./models/usuario')
var Categoria = require('./models/categoria')
var Disponibiidade = require('./models/disponibilidade')

// Configuration
mongoose.connect('mongodb://localhost/webmart');

// app.use(morgan('webmart'));                                         // log every request to the console
app.use(bodyParser.urlencoded({ 'extended': 'true' }));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

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

    // // return res.status(403).send(next);
});

// Models










// var Carrinho = mongoose.model('carrinho', {
//     usuario_id: String,
//     supermercado_id: String,
//     compras: [{
//         produto_id: String,
//         quantidade: Number,
//         valor: Number
//     }],
//     horario: Date
// });




// app.get('/api/teste', function (req, res) {
//     console.log('get: api/teste/');

//     csv
//         .fromPath("g://my.csv")
//         .on("data", function (data) {
//             console.log(data);

//             Produto.create({
//                 supermercado_id: req.body.supermercado_id,
//                 categoria_id: data[6],
//                 codigo: data[0],
//                 nome: data[1],
//                 descricao: data[2],
//                 unidade: data[4] == "1",
//                 peso: data[5] == "1",
//                 preco: Number(data[3]) 
//             }, function (err, data) {
//                 if (err)
//                     console.log(err);
//             });

//         })
//         .on("end", function () {
//             console.log("done");
//         });

//     res.json(null);
// });

app.get('/status', function (req, res) {
    console.log((req.usuario != null ? req.usuario.nome : "someone") + ' using get: api/status');

    var token = req.body.token || req.query.token || req.headers['x-access-token'];


    if (token) {
        jwt.verify(token, 'secret', function (err, decoded) {
            if (err)
                return null;
            res.json(decoded)
        });
    }
    else
        return res.json(null);
});

app.post('/token', function (req, res) {

    console.log((req.usuario != null ? req.usuario.nome : "someone") + ' using post: api/token');
    Usuario.findOne({ email: req.body.email }, function (err, data) {
        if (err)
            res.send(err)
        if (!data) {
            res.json({ Success: false, Message: 'user not found' })
        } else {
            if (data.senha != req.body.senha) {
                res.json({ Success: false, Message: 'password failed' })
            }
            else {


                var token = jwt.sign(data.toObject(), 'secret', {

                });

                // return the information including token as JSON
                res.json({
                    Success: true,
                    Message: 'Enjoy your token!',
                    Token: token
                });
            }
        }
    });
});


// Get usuario
app.get('/api/usuario/email/:email', function (req, res) {
    console.log('get: api/usuario/email/:email');
    Usuario.findOne({ email: req.params.email }, function (err, data) {
        if (err)
            res.send(err)
        res.json(data);
    });
});

// Get usuario
app.get('/api/usuario/:id', function (req, res) {
    console.log('get: api/usuario/:id');
    Usuario.findOne({ _id: req.params.id }, function (err, data) {
        if (err)
            res.send(err)
        res.json(data);
    });
});

// Post usuario
app.post('/api/usuario', function (req, res) {
    console.log('post: api/usuario/');
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



app.use('/birds', birds);
app.use('/api/carrinho', carrinho);
app.use('/api/supermercado', supermercado);
app.use('/api/produto', produto);
app.use('/api/categoria', categoria);


app.listen(8080);
console.log("App listening on port 8080");