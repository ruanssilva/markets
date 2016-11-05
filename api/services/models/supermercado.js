var mongoose = require('mongoose');

var Supermercado = mongoose.model('supermercado', {
    nome: String,
    descricao: String,
    longitude: String,
    latitude: String,
    range: Number,
});

module.exports = Supermercado;