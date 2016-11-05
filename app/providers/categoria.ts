import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map';

import { HttpProvider } from './http'

import { Categoria } from '../models/categoria'

@Injectable()
export class CategoriaProvider {

    data: any;

    constructor(
        private http: Http,
        private HttpProvider : HttpProvider
    ) {
        this.data = null;
    }

    get() {
        return this.HttpProvider.get("http://192.168.25.9:8080/api/categoria")
            .map((res) => res.json());
    }

    post(categoria : Categoria) {

        this.HttpProvider.post("http://192.168.25.9:8080/api/categoria", categoria)
            .map((res) => res.json())
            .subscribe(data => {
                console.log(data);
            });
    }

    getByTipo(tipo: String, supermercado : String): Promise<Array<Categoria>> {

        return new Promise(resolve => {

            this.HttpProvider.get(`http://192.168.25.9:8080/api/categoria/supermercado/${ supermercado }/tipo/${tipo}`)
                .map((res) => res.json() as Array<Categoria>)
                .subscribe(data => {
                    resolve(data); 
                }); 


        });
    }

    getBySupermercado(id: String): Promise<Array<Categoria>> {

        return new Promise(resolve => {

            this.HttpProvider.get(`http://192.168.25.9:8080/api/categoria/supermercado/${id}`)
                .map((res) => res.json() as Array<Categoria>)
                .subscribe(data => {
                    resolve(data); 
                }); 


        });
    }

}

