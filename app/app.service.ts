import { Injectable, OnInit } from '@angular/core'
import { Router } from '@angular/router'


import { Supermercado } from './models/supermercado'
import { Categoria } from './models/categoria'
import { Disponibilidade } from './models/disponibilidade'
import { Carrinho } from './models/carrinho'
import { Usuario } from './models/usuario'

import { SupermercadoProvider } from './providers/supermercado'
import { CategoriaProvider } from './providers/categoria'
import { DisponibilidadeProvider } from './providers/disponibilidade'
import { ProdutoProvider } from './providers/produto'
import { CarrinhoProvider } from './providers/carrinho'
import { UsuarioProvider } from './providers/usuario'
import { LoginProvider } from './providers/login'


@Injectable()
export class AppService implements OnInit {

    public Supermercado: Supermercado;
    public Cep: string;

    public Compra: Array<any> = [];
    public Carrinho: Carrinho;

    public Disponibilidade: Disponibilidade;

    public Usuario: Usuario;

    public Categorias: Array<Categoria>;
    public Disponibilidades: Array<Disponibilidade>;

    public Agendar: Boolean = false;

    /**
     *
     */
    constructor(
        private _supermercadoProvider: SupermercadoProvider,
        private _categoriaProvider: CategoriaProvider,
        private _disponibilidadeProvider: DisponibilidadeProvider,
        private CarrinhoProvider: CarrinhoProvider,
        private UsuarioProvider: UsuarioProvider,
        private LoginProvider: LoginProvider,
        private _router: Router
    ) {

        // alert('constructor #AppService');

        this.__getCep().then(wait => {
            this.Cep = wait;
        });

        this.__getSupermercado().then(wait => {
            this.Supermercado = wait;
        });

        this.__getCarrinho().then(wait => {
            if (wait == null) {
                this.Carrinho = new Carrinho();
                this.Carrinho.compras = [];
            }
            else
                this.Carrinho = wait;
        });

    }

    ngOnInit() {


    }

    isSupermercado(): Boolean {
        return this.getCep() != null;
    }

    setCep(cep: string) {
        localStorage.setItem("#cep", cep);
    }

    getCep(): String {
        return localStorage.getItem("#cep");
    }

    getCategorias(id: String): Promise<Array<Categoria>> {
        return new Promise(resolve => {
            this._categoriaProvider.getBySupermercado(id)
                .then(data => {
                    this.Categorias = data;
                    resolve(this.Categorias);
                });
        });
    }



    getDisponibilidades(id: String): Promise<Array<Disponibilidade>> {
        return new Promise(resolve => {
            this._disponibilidadeProvider.getBySupermercado(id)
                .then(data => {
                    this.Disponibilidades = data;
                    resolve(this.Disponibilidades);
                });
        });
    }



    // comentario

    __setUsuario(usuario: Usuario): Promise<any> {
        return new Promise(resolve => {
            if (usuario != null)
                localStorage.setItem("#usuarioid#", usuario._id);
            else
                localStorage.removeItem("#usuarioid#");

            //this.Usuario = usuario;
            resolve();
        })
    }

    __setToken(token: string): Promise<Usuario> {

        return new Promise(resolve => {
            if (token != null)
                localStorage.setItem("#token#", token);
            else
                localStorage.removeItem("#token#");

            this.__getUsuario()
                .then(wait => {
                    resolve(wait);
                })
        })
    }

    __getUsuario(): Promise<Usuario> {
        return new Promise(resolve => {
            let token = localStorage.getItem("#token#");

            if (token != null) {
                this.LoginProvider.get(token)
                    .then(wait => {
                        if (wait == null) {
                            localStorage.removeItem("#token#");
                            resolve(null);
                        }
                        this.Usuario = wait;
                        resolve(wait);
                    });
            }
            else
                this.Usuario = null;
        });
    }

    __setCep(cep: string): Promise<any> {
        return new Promise(resolve => {
            localStorage.setItem("#cep#", cep);
            this.Cep = cep;
            resolve();
        });
    }

    __getCep(): Promise<string> {
        return new Promise(resolve => {
            resolve(localStorage.getItem("#cep#"));
        });
    }

    __setAgendar(agendar: Boolean): Promise<any> {
        return new Promise(resolve => {
            localStorage.setItem("#agendar#", agendar ? "1" : "0");
            resolve();
        });
    }

    __getAgendar(): Promise<Boolean> {
        return new Promise(resolve => {
            this.Agendar = localStorage.getItem("#agendar#") == "1";
            resolve(this.Agendar);
        });
    }

    __setDisponibilidade(disponibilidade: Disponibilidade): Promise<any> {
        return new Promise(resolve => {
            localStorage.setItem("#disponibilidadeid#", disponibilidade._id);
            resolve();
        });
    }

    __getDisponibilidade(): Promise<Disponibilidade> {
        return new Promise(resolve => {
            let _id = localStorage.getItem("#disponibilidadeid#");
            if (_id) {
                if (this.Disponibilidade != null && this.Disponibilidade._id == _id)
                    resolve(this.Disponibilidade);
                this._disponibilidadeProvider.getById(_id)
                    .then(data => {
                        this.Disponibilidade = data;
                        resolve(data);
                    });
            }
            else
                resolve(null);
        });
    }

    __setCarrinho(carrinho: Carrinho): Promise<Carrinho> {
        return new Promise(resolve => {

            if (this.Usuario != null)
                carrinho.usuario_id = this.Usuario._id;
            carrinho.supermercado_id = this.Supermercado._id;
            carrinho.horario = new Date()

            if (this.Carrinho._id != null) {

                let _id = localStorage.getItem("#carrinhoid#");
                carrinho._id = _id;

                this.CarrinhoProvider.put(carrinho).then(wait => {
                    resolve(wait);
                });
            }
            else {
                this.CarrinhoProvider.post(carrinho)
                    .then(wait => {
                        this.Carrinho = wait as Carrinho;
                        localStorage.setItem("#carrinhoid#", wait._id);
                        resolve(wait);
                    });
            }


        });
    }

    __getCarrinho(): Promise<Carrinho> {
        return new Promise(resolve => {
            let _id = localStorage.getItem("#carrinhoid#");
            if (_id != null) {
                this.CarrinhoProvider.getById(_id).then(wait => {
                    if (wait == null) {
                        _id = null;
                        localStorage.setItem("#carrinhoid#", _id);
                    }
                    console.log(wait);
                    resolve(wait);
                });

            }
            if (_id == null) {
                this.Carrinho = new Carrinho();
                this.Carrinho.compras = [];
                resolve(this.Carrinho);
            }
        });
    }

    __setSupermercado(supermercado: Supermercado): Promise<any> {
        return new Promise(resolve => {
            localStorage.setItem("#supermercadoid#", supermercado._id);
            this.Supermercado = supermercado;
            resolve();
        });
    }

    __getSupermercado(): Promise<Supermercado> {
        return new Promise(resolve => {
            let _id = localStorage.getItem("#supermercadoid#");
            if (_id) {
                if (this.Supermercado != null && this.Supermercado._id == _id) {
                    resolve(this.Supermercado);
                }
                else {
                    this._supermercadoProvider.getById(_id)
                        .then(data => {
                            resolve(data);
                        });
                }
            }
            else
                resolve(null);
        });
    }

}