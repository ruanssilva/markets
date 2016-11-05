import { Endereco } from './endereco'

export class Usuario {
    _id: string;
    email: string;
    senha: string;
    nome: string;
    sexo: string;
    cpf: string;
    nascimento: Date;
    telefone: string;
    celular: string;
    enderecos: Array<Endereco>;
}