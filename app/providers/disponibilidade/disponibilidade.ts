import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map';

import { Disponibilidade } from '../../models/disponibilidade'


@Injectable()
export class SupermercadoProvider {

    supermercados: any;
    supermercado: any;

    constructor(private http: Http) {
        this.supermercados = null;
        this.supermercado = null;
    }

    get(): Promise<Array<Disponibilidade>> {

        return new Promise(resolve => {

            return this.http.get("http://localhost:8080/api/disponibilidade")
                .map((res) => res.json() as Array<Disponibilidade>)
                .subscribe(data => {
                    resolve(data);
                });

        });



    }

    getById(id: string): Promise<Disponibilidade> {

        return new Promise(resolve => {

            this.http.get(`http://localhost:8080/api/disponibilidade/${id}`)
                .map((res) => res.json() as Disponibilidade)
                .subscribe(data => {
                    resolve(data);
                });


        });
    }

    post(disponibilidade: Disponibilidade): Promise<any> {

        return new Promise(resolve => {

            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

            this.http.post("http://localhost:8080/api/disponibilidade", JSON.stringify(disponibilidade), { headers: headers })
                .map((res) => res.json())
                .subscribe(data => {
                    resolve(data);
                });

        });

    }


}

