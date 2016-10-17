import { NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { ConnectionBackend } from '@angular/http'

import { AppService } from './app.service'

import { Produto } from './providers/produto/produto'
import { SupermercadoProvider } from './providers/supermercado/supermercado'

import { Supermercado } from './models/supermercado'

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

@Component({
  selector: 'my-app',
  templateUrl: './app/views/layout.html'
})

export class AppComponent implements OnInit {

  supermercado: Supermercado = null;

  form: FormGroup;
  cep: FormControl;

  testando : String;

  constructor(
    private _supermercadoProvider: SupermercadoProvider,
    private _appService : AppService,
    private _router: Router
  ) {
    this.testando = AppService.Teste;
  }

  ngOnInit() {
    
    this.getSupermercado();

    this.cep = new FormControl('', Validators.required);
    this.form = new FormGroup({});
    this.form.addControl('cep', this.cep);
  }

  public getCep(): String {
    return localStorage.getItem("cep");
  }

  public getSupermercado(): Supermercado {
    console.log('ola!');
    if (!localStorage.getItem("supermercado"))
      return null;
    if (this.supermercado == null || this.supermercado._id != localStorage.getItem("supermercado"))
      this._supermercadoProvider.getById(localStorage.getItem("supermercado").toString())
        .then(data => this.supermercado = data);

    return this.supermercado;
  }

  Cep(): void {
    localStorage.setItem("cep", this.cep.value);
    this._router.navigateByUrl('/supermercado');
  }


}
