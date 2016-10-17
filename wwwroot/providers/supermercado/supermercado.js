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
require('rxjs/add/operator/map');
/*
  Generated class for the Person provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var SupermercadoProvider = (function () {
    function SupermercadoProvider(http) {
        this.http = http;
        this.supermercados = null;
        this.supermercado = null;
    }
    SupermercadoProvider.prototype.get = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return _this.http.get("http://localhost:8080/api/supermercado")
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    SupermercadoProvider.prototype.getById = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("http://localhost:8080/api/supermercado/" + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    SupermercadoProvider.prototype.post = function (supermercado) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post("http://localhost:8080/api/supermercado", JSON.stringify(supermercado), { headers: headers })
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
    SupermercadoProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SupermercadoProvider);
    return SupermercadoProvider;
}());
exports.SupermercadoProvider = SupermercadoProvider;
//# sourceMappingURL=supermercado.js.map