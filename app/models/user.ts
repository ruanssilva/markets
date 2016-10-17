import { Endereco } from './endereco'

export class User {
    id: String;
    nome: String;
    email: String;
    cep: String;
    enderecos: Array<Endereco>;
}