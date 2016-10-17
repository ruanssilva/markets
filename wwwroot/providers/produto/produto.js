"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var observable_1 = require('rxjs/observable');
require('rxjs/add/operator/map');
/*
  Generated class for the Person provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Produto = (function () {
    function Produto(http) {
        this.http = http;
        this.data = null;
    }
    Produto.prototype.get = function () {
        return this.http.get("http://localhost:8080/api/produto")
            .map(function (res) { return res.json(); });
    };
    Produto.prototype.post = function (produto) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post("http://localhost:8080/api/produto", JSON.stringify(produto), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
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
    };
    Produto.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    Produto.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return observable_1.Observable.throw(errMsg);
    };
    Produto = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Produto);
    return Produto;
}());
exports.Produto = Produto;
//# sourceMappingURL=produto.js.map