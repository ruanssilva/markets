import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map';

import { HttpProvider } from './http'

import { Usuario } from '../models/usuario'


@Injectable()
export class LoginProvider {


    constructor(
        private http: Http,
        private HttpProvider : HttpProvider
        
    ) {

    }


    get(token : string) : Promise<any> {
     

        return new Promise(resolve => {
            this.HttpProvider.get("http://192.168.25.9:8080/status")
            .map((res) => res.json() as Usuario)
            .subscribe(data=> {
                resolve(data);
            });
        })
    }

    post(usuario: Usuario): Promise<any> {

        return new Promise(resolve => {

            this.HttpProvider.post("http://192.168.25.9:8080/token", usuario)
                .map((res) => res.json())
                .subscribe(data => {
                    resolve(data);
                });

        });
    }


}

