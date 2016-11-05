var mongoose = require('mongoose');

var Categoria = mongoose.model('categoria', {
    supermercado_id: String,
    nome: String,
    descricao: String,
    tipo: String
});

module.exports = Categoria;