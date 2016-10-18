import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map';

import { Reserva } from '../../models/reserva'


@Injectable()
export class SupermercadoProvider {

    supermercados: any;
    supermercado: any;

    constructor(private http: Http) {
        this.supermercados = null;
        this.supermercado = null;
    }

    get(): Promise<Array<Reserva>> {

        return new Promise(resolve => {

            return this.http.get("http://localhost:8080/api/reserva")
                .map((res) => res.json() as Array<Reserva>)
                .subscribe(data => {
                    resolve(data);
                });

        });



    }

    getById(id: string): Promise<Reserva> {

        return new Promise(resolve => {

            this.http.get(`http://localhost:8080/api/reserva/${id}`)
                .map((res) => res.json() as Reserva)
                .subscribe(data => {
                    resolve(data);
                });


        });
    }

    post(reserva: Reserva): Promise<any> {

        return new Promise(resolve => {

            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

            this.http.post("http://localhost:8080/api/reserva", JSON.stringify(reserva), { headers: headers })
                .map((res) => res.json())
                .subscribe(data => {
                    resolve(data);
                });
        });

    }


}

