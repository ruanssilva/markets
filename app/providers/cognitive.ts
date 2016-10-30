import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map';

import { Cognitive, Image } from '../models/cognitive'


@Injectable()
export class CognitiveProvider {


    constructor(private http: Http) {

    }

    get(search : string): Promise<Cognitive> {

        return new Promise(resolve => {

            let headers = new Headers();
            headers.append('Ocp-Apim-Subscription-Key', 'c98432bcf28647d6b9c753ce604221d9');
            headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
            

            return this.http.get(`https://api.cognitive.microsoft.com/bing/v5.0/search?q=${ encodeURIComponent(search) }&mkt=pt-br`, headers)
                .map((res) => res.json() as Cognitive)
                .subscribe(data => {
                    resolve(data);
                });

        });
    }
}

