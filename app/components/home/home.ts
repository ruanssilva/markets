import { NgModule, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { AppService } from '../../app.service'
import { Supermercado } from '../../models/supermercado'


@Component({
    templateUrl: './app/components/home/home.html'
})

export class HomeComponent implements OnInit {

    @Input() supermercado: Supermercado;
    @Output() setSupermercado = new EventEmitter<Supermercado>();

    constructor(
        private AppService: AppService,
        private Router: Router
    ) {

    }

    ngOnInit() {

        // if (this.AppService.Cep == null)
        //     this.Router.navigateByUrl("/cep");
        // else
        //     this.Router.navigateByUrl("/supermercado");
    }
}
