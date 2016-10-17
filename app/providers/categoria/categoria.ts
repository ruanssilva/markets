import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map';

import { Categoria } from '../../models/categoria'

@Injectable()
export class CategoriaProvider {

    data: any;

    constructor(private http: Http) {
        this.data = null;
    }

    get() {
        return this.http.get("http://localhost:8080/api/categoria")
            .map((res) => res.json());
    }

    post(categoria) {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post("http://localhost:8080/api/categoria", JSON.stringify(categoria), { headers: headers })
            .map((res) => res.json())
            .subscribe(data => {
                console.log(data);
            });
        // return new Promise((resolve) => {
        //   this.http.post('http://localhost:8080/api/produto', JSON.stringify(person), { headers: headers })
        //     .map((res) => res.json())
        //     .subscribe(data => {
        //       this.data = data;
        //       resolve(this.data);
        //     });
        // });
    }

    getBySupermercado(id: String): Promise<Array<Categoria>> {

    return new Promise(resolve => {

      this.http.get(`http://localhost:8080/api/categoria/supermercado/${id}`)
        .map((res) => res.json() as Array<Categoria>)
        .subscribe(data => {
          resolve(data);
        });


    });
  }

}

