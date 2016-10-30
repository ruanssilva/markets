import { NgModule, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';

import { Supermercado } from '../../models/supermercado'
import { AppService } from '../../app.service';

import { AppComponent } from '../../app.component'

import { SupermercadoProvider } from '../../providers/supermercado'

@Component({
    // selector:"my-page",
    templateUrl: './app/components/supermercado/supermercado.html'
})



export class SupermercadoComponent implements OnInit {

    supermercados: Array<Supermercado> = null;

    constructor(
        private AppService: AppService,
        private SupermercadoProvider: SupermercadoProvider,
        private _router: Router
    ) {

    }

    ngOnInit() {

        this.SupermercadoProvider.get()
            .then(supermercados => {
                this.supermercados = supermercados;
            });

    }

    Supermercado(supermercado: Supermercado): void {
        this.AppService.__setSupermercado(supermercado).then(wait => {
            this._router.navigateByUrl('/disponibilidade');
        });
    }
}
