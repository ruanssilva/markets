var mongoose = require('mongoose');

var Disponibilidade = mongoose.model('disponibilidade', {
    supermercado_id: String,
    dia: String,
    hora: String,
    lotacao: Number
});

module.exports = Disponibilidade;