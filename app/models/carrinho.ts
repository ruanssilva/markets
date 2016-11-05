import { Compra } from './compra'

export class Carrinho {
    _id: string;
    usuario_id: string;
    supermercado_id: string;    
    compras: Array<Compra>;
    horario: Date;
}