import { OnInit, Injectable } from '@angular/core'
import { Router } from '@angular/router'


import { Supermercado } from './models/supermercado'
import { Categoria } from './models/categoria'

import { SupermercadoProvider } from './providers/supermercado/supermercado'
import { CategoriaProvider } from './providers/categoria/categoria'

@Injectable()
export class AppService implements OnInit {

    public Cep: String;

    public Supermercado: Supermercado;
    public Categorias: Array<Categoria>;

    /**
     *
     */
    constructor(
        private _supermercadoProvider: SupermercadoProvider,
        private _categoriaProvider: CategoriaProvider,
        private _router: Router
    ) {

    }

    ngOnInit() {

    }

    setCep(cep: string) {

    }

    Reset(): void {
        this.Supermercado = null;
    }

    setSupermercado(id: string): Promise<Supermercado> {
        return new Promise(resolve => {
            localStorage.setItem("supermercado", id);

            this.getSupermercado().then(t => {
                resolve(t);
            });

        });
    }

    getSupermercado(): Promise<Supermercado> {
        return new Promise(resolve => {
            this._supermercadoProvider.getById(localStorage.getItem("supermercado"))
                .then(data => {
                    this.Supermercado = data;
                    resolve(this.Supermercado);
                });

        });
    }

    getCategorias(id : String): Promise<Array<Categoria>> {
        return new Promise(resolve => {            
            this._categoriaProvider.getBySupermercado(id)
                .then(data => {
                    this.Categorias = data;
                    resolve(this.Categorias);
                });
        });
    }

}