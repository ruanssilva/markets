import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';



import { Disponibilidade } from '../../models/disponibilidade';

import { AppService } from '../../app.service'

import { AppSession } from '../../app.session'

@Component({
    templateUrl: './app/components/disponibilidade/disponibilidade.html',
    providers: []
})

export class DisponibilidadeComponent implements OnInit {

    disponibilidades: Array<Disponibilidade> = null;
    dia: string;

    constructor(
        private AppService: AppService,
        private _router: Router
    ) {



    }

    Compras(): void {
        this._router.navigateByUrl('/produto');
    }

    ngOnInit() {


        this.AppService.__getSupermercado().then(wait => {

            this.AppService.getDisponibilidades(this.AppService.Supermercado._id)
                .then(wait2 => {
                    this.disponibilidades = wait2;
                });

        });


    }

    Disponibilidade(disponibilidade: Disponibilidade): void {
        this.AppService.Disponibilidade = disponibilidade;
    }

    Agendar(agendar: Boolean) {
        this.AppService.Agendar = agendar;
    }

    getDia(dia: String): Boolean {
        let result: Boolean = false;
        if (this.AppService.Disponibilidades != null)
            this.AppService.Disponibilidades.forEach(disponibilidade => {
                if (disponibilidade.dia == dia)
                    result = true;
            });
        return result;
    }

    setDia(dia: string): void {
        this.AppService.Disponibilidade = null;

        this.dia = dia;
        this.disponibilidades = [];
        this.AppService.Disponibilidades.forEach(disponibilidade => {
            if (disponibilidade.dia == dia)
                this.disponibilidades.push(disponibilidade);
        });
    }
}
