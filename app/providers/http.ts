import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map';

import { AppService } from '../app.service'

@Injectable()
export class HttpProvider {

    constructor(
        private http: Http
    ) {
    }

    get(url: string, headers: any = new Headers()): Observable<Response> {

        headers.append('x-access-token', localStorage.getItem("#token#"));

        return this.http.get(url, { headers: headers });
    }

    put(url: string, body: any = null, headers: Headers = new Headers()): Observable<Response> {

        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', localStorage.getItem("#token#"));

        return this.http.put(url, JSON.stringify(body), { headers: headers });
    }

    post(url: string, body: any = null, headers: Headers = new Headers()): Observable<Response> {

        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', localStorage.getItem("#token#"));

        return this.http.post(url, JSON.stringify(body), { headers: headers });
    }
}

