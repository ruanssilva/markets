import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map';

import { Carrinho } from '../models/carrinho'


@Injectable()
export class CarrinhoProvider {


    constructor(private http: Http) {

    }

    getById(id: string): Promise<Carrinho> {

        return new Promise(resolve => {
            this.http.get(`http://192.168.25.8:8080/api/carrinho/${id}`)
                .map((res) => res.json() as Carrinho)
                .subscribe(data => {
                    resolve(data);
                });
        });
    }

    put(carrinho: Carrinho): Promise<Carrinho> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return new Promise(resolve => {

            this.http.put("http://192.168.25.8:8080/api/carrinho", JSON.stringify(carrinho), { headers: headers })
                .map((res) => res.json() as Carrinho)
                .subscribe(data => {
                    resolve(data);
                });

        });
    }

    post(Carrinho: Carrinho): Promise<Carrinho> {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        

        return new Promise(resolve => {

            this.http.post("http://192.168.25.8:8080/api/carrinho", JSON.stringify(Carrinho), { headers: headers })
                .map((res) => res.json() as Carrinho)
                .subscribe(data => {
                    resolve(data);
                });

        });

    }


}

