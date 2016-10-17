import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map';

/*
  Generated class for the Person provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Produto {

  data: any;

  constructor(private http: Http) {
    this.data = null;
  }

  get() {
    return this.http.get("http://localhost:8080/api/produto")
      .map((res) => res.json());
  }

  post(produto) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post("http://localhost:8080/api/produto", JSON.stringify(produto), { headers: headers })
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

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }



  // delete(produto) {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');

  //   return new Promise((resolve) => {
  //     this.http.delete('http://localhost:8080/api/produto/' + produto._id)
  //       .map((res) => res.json())
  //       .subscribe(data => {
  //         this.data = data;
  //         resolve(this.data);
  //       });
  //   });
  // }

}

