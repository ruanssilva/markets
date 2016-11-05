import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map';
import { HttpProvider } from './http'

import { Carrinho } from '../models/carrinho'


@Injectable()
export class CarrinhoProvider {

    constructor(
        private http: Http,
        private HttpProvider: HttpProvider
    ) {
    }

    getById(id: string): Promise<Carrinho> {

        return new Promise(resolve => {
            this.HttpProvider.get(`http://192.168.25.9:8080/api/carrinho/${id}`)
                .map((res) => res.json() as Carrinho)
                .subscribe(data => {
                    resolve(data);
                });
        });
    }

    put(carrinho: Carrinho): Promise<Carrinho> {

        return new Promise(resolve => {

            this.HttpProvider.put("http://192.168.25.9:8080/api/carrinho", carrinho)
                .map((res) => res.json() as Carrinho)
                .subscribe(data => {
                    resolve(data);
                });

        });
    }

    post(carrinho: Carrinho): Promise<Carrinho> {

        return new Promise(resolve => {

            this.HttpProvider.post("http://192.168.25.9:8080/api/carrinho", carrinho)
                .map((res) => res.json() as Carrinho)
                .subscribe(data => {
                    resolve(data);
                });

        });

    }


}

