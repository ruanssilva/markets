import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map';

import { HttpProvider } from './http'

import { Produto } from '../models/produto'


@Injectable()
export class ProdutoProvider {


  constructor(
    private http: Http,
    private HttpProvider: HttpProvider
  ) {

  }

  get(): Promise<Array<Produto>> {

    return new Promise(resolve => {

      return this.HttpProvider.get("http://192.168.25.9:8080/api/produto")
        .map((res) => res.json() as Array<Produto>)
        .subscribe(data => {
          resolve(data);
        });

    });

  }

  getById(id: string): Promise<Produto> {

    return new Promise(resolve => {

      this.HttpProvider.get(`http://192.168.25.9:8080/api/produto/${id}`)
        .map((res) => res.json() as Produto)
        .subscribe(data => {
          resolve(data);
        });


    });
  }

  getByCategoria(id: String): Promise<Array<Produto>> {

    return new Promise(resolve => {

      this.HttpProvider.get(`http://192.168.25.9:8080/api/produto/categoria/${id}`)
        .map((res) => res.json() as Array<Produto>)
        .subscribe(data => {
          resolve(data);
        });


    });
  }

  searchByCategoria(categoria: String, search: String): Promise<Array<Produto>> {

    return new Promise(resolve => {

      this.HttpProvider.get(`http://192.168.25.9:8080/api/produto/categoria/${categoria}/search/${search}`)
        .map((res) => res.json() as Array<Produto>)
        .subscribe(data => {
          resolve(data);
        });


    });
  }

  getBySupermercado(id: String): Promise<Array<Produto>> {

    return new Promise(resolve => {

      this.HttpProvider.get(`http://192.168.25.9:8080/api/produto/supermercado/${id}`)
        .map((res) => res.json() as Array<Produto>)
        .subscribe(data => {
          resolve(data);
        });


    });
  }

  post(reserva: Produto): Promise<any> {

    return new Promise(resolve => {

      this.HttpProvider.post("http://192.168.25.9:8080/api/produto", reserva)
        .map((res) => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });

  }


}

