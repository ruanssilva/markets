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
var http_2 = require('./http');
/*
  Generated class for the Person provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var SupermercadoProvider = (function () {
    function SupermercadoProvider(http, HttpProvider) {
        this.http = http;
        this.HttpProvider = HttpProvider;
        this.supermercados = null;
        this.supermercado = null;
    }
    SupermercadoProvider.prototype.get = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return _this.HttpProvider.get("http://192.168.25.9:8080/api/supermercado")
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    SupermercadoProvider.prototype.getById = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.HttpProvider.get("http://192.168.25.9:8080/api/supermercado/" + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    SupermercadoProvider.prototype.post = function (supermercado) {
        this.HttpProvider.post("http://192.168.25.9:8080/api/supermercado", supermercado)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
        });
    };
    SupermercadoProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, http_2.HttpProvider])
    ], SupermercadoProvider);
    return SupermercadoProvider;
}());
exports.SupermercadoProvider = SupermercadoProvider;
//# sourceMappingURL=supermercado.js.map