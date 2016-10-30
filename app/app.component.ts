import { NgModule, OnInit, Directive, Output, Component } from '@angular/core';
import { Router } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { ConnectionBackend } from '@angular/http'

import { SupermercadoProvider } from './providers/supermercado'
import { AppService } from "./app.service"

import { Supermercado } from './models/supermercado'
import { SupermercadoComponent } from './components/supermercado/supermercado'

@Component({
  selector: 'my-app',
  templateUrl: './app/views/layout.html'

})

export class AppComponent implements OnInit {



  constructor(
    private _supermercadoProvider: SupermercadoProvider,
    private AppService: AppService,
    private _router: Router
  ) {
  }

  ngOnInit() {



  }
}
