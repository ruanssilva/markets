var mongoose = require('mongoose');

var Usuario = mongoose.model('usuario', {
    email: String,
    senha: String,
    nome: String,
    sexo: String,
    cpf: String,
    nascimento: String,
    telefone: String,
    celular: String,
    enderecos: [{
        cep: String,
        tipo: String,
        logradouro: String,
        bairro: String,
        municipio: String,
        numero: String,
        complemento: String,
        referencia: String
    }]
})

module.exports = Usuario;