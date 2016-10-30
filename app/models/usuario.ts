import { Endereco } from './endereco'

export class Usuario {
    _id: String;
    nome: String;
    sobrenome: String;
    cpf: String;
    nascimento: Date;
    enderecos: Array<Endereco>;
}