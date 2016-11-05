var mongoose = require('mongoose');

var Carrinho = mongoose.model('carrinho', {
    usuario_id: String,
    supermercado_id: String,
    compras: [{
        produto_id: String,
        quantidade: Number,
        valor: Number
    }],
    horario: Date
});


module.exports = Carrinho;