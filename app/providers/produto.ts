import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map';

import { Produto } from '../models/produto'


@Injectable()
export class ProdutoProvider {


  constructor(private http: Http) {

  }

  get(): Promise<Array<Produto>> {

    return new Promise(resolve => {

      return this.http.get("http://192.168.25.8:8080/api/produto")
        .map((res) => res.json() as Array<Produto>)
        .subscribe(data => {
          resolve(data);
        });

    });

  }

  getById(id: string): Promise<Produto> {

    return new Promise(resolve => {

      this.http.get(`http://192.168.25.8:8080/api/produto/${id}`)
        .map((res) => res.json() as Produto)
        .subscribe(data => {
          resolve(data);
        });


    });
  }

  getByCategoria(id: String): Promise<Array<Produto>> {

    return new Promise(resolve => {

      this.http.get(`http://192.168.25.8:8080/api/produto/categoria/${id}`)
        .map((res) => res.json() as Array<Produto>)
        .subscribe(data => {
          resolve(data);
        });


    });
  }

  getBySupermercado(id: String): Promise<Array<Produto>> {

    return new Promise(resolve => {



      this.http.get(`http://192.168.25.8:8080/api/produto/supermercado/${id}`)
        .map((res) => res.json() as Array<Produto>)
        .subscribe(data => {
          resolve(data);
        });


    });
  }

  post(reserva: Produto): Promise<any> {

    return new Promise(resolve => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post("http://192.168.25.8:8080/api/produto", JSON.stringify(reserva), { headers: headers })
        .map((res) => res.json())
        .subscribe(data => {


          console.log("olá!!");
          console.log("olá!!");
          console.log(data);

          resolve(data);
        });
    });

  }


}

