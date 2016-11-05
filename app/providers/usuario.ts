import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map';

import { Usuario } from '../models/usuario'


@Injectable()
export class UsuarioProvider {


    constructor(private http: Http) {

    }

    getById(id: string): Promise<Usuario> {

        return new Promise(resolve => {
            this.http.get(`http://192.168.25.9:8080/api/usuario/${id}`)
                .map((res) => res.json() as Usuario)
                .subscribe(data => {
                    resolve(data);
                });
        });
    }

    getByEmail(email: string): Promise<Usuario> {

        return new Promise(resolve => {
            this.http.get(`http://192.168.25.9:8080/api/usuario/email/${email}`)
                .map((res) => res.json() as Usuario)
                .subscribe(data => {
                    resolve(data);
                });
        });
    }

    put(Usuario: Usuario): Promise<Usuario> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return new Promise(resolve => {

            this.http.put("http://192.168.25.9:8080/api/Usuario", JSON.stringify(Usuario), { headers: headers })
                .map((res) => res.json() as Usuario)
                .subscribe(data => {
                    resolve(data);
                });

        });
    }

    post(usuario: Usuario): Promise<Usuario> {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return new Promise(resolve => {

            this.getByEmail(usuario.email)
                .then(wait => {
                    if (wait == null) {
                        this.http.post("http://192.168.25.9:8080/api/usuario", JSON.stringify(usuario), { headers: headers })
                            .map((res) => res.json() as Usuario)
                            .subscribe(data => {
                                resolve(data);
                            });
                    }
                    else {
                        resolve(null);
                    }

                });

        });
    }


}

