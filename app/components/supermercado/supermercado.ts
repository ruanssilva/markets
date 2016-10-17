import { NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { Supermercado } from '../../models/supermercado'
import { AppService } from '../../app.service';

import { SupermercadoProvider } from '../../providers/supermercado/supermercado'
import { CategoriaProvider } from '../../providers/categoria/categoria'

@Component({
    templateUrl: './app/components/supermercado/supermercado.html'
})

export class SupermercadoComponent implements OnInit {

    cep: String = localStorage.getItem("cep");

    testando: string;

    supermercados: Array<Supermercado> = null;
    appService: AppService;

    constructor(
        private _appService: AppService,
        private _supermercadoProvider: SupermercadoProvider,
        private _categoriaProvider: CategoriaProvider,
        private router: Router
    ) {


    }

    ngOnInit() {
        this._supermercadoProvider.get()
            .then(data => {
                this.supermercados = data;
            });
    }

    Supermercado(id: string): void {

        this._appService.setSupermercado(id).then(t => {
            this.router.navigateByUrl('/produto');
        });
    }

    Outro(): void {
        this._appService.getSupermercado();
    }

    teste(id: string) {
        this._categoriaProvider.post({
            supermercado_id: id,
            nome: "Categoria 2",
            descricao: "Descrição categoria 2"
        });
    }

}
