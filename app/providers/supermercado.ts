import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map';

import { Supermercado } from '../models/supermercado'

/*
  Generated class for the Person provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SupermercadoProvider {

  supermercados: any;
  supermercado: any;

  constructor(private http: Http) {
    this.supermercados = null;
    this.supermercado = null;
  }

  get(): Promise<Array<Supermercado>> {

    return new Promise(resolve => {

      return this.http.get("http://192.168.25.8:8080/api/supermercado")
        .map((res) => res.json() as Array<Supermercado>)
        .subscribe(data => {
          resolve(data);
        });

    });



  }

  getById(id: string): Promise<Supermercado> {

    return new Promise(resolve => {

      this.http.get(`http://192.168.25.8:8080/api/supermercado/${id}`)
        .map((res) => res.json() as Supermercado)
        .subscribe(data => {
          resolve(data);
        });


    });
  }

  post(supermercado) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post("http://192.168.25.8:8080/api/supermercado", JSON.stringify(supermercado), { headers: headers })
      .map((res) => res.json())
      .subscribe(data => {
        console.log(data);
      });
  }


}

