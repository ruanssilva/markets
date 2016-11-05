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
var CategoriaProvider = (function () {
    function CategoriaProvider(http, HttpProvider) {
        this.http = http;
        this.HttpProvider = HttpProvider;
        this.data = null;
    }
    CategoriaProvider.prototype.get = function () {
        return this.HttpProvider.get("http://192.168.25.9:8080/api/categoria")
            .map(function (res) { return res.json(); });
    };
    CategoriaProvider.prototype.post = function (categoria) {
        this.HttpProvider.post("http://192.168.25.9:8080/api/categoria", categoria)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
        });
    };
    CategoriaProvider.prototype.getByTipo = function (tipo, supermercado) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.HttpProvider.get("http://192.168.25.9:8080/api/categoria/supermercado/" + supermercado + "/tipo/" + tipo)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    CategoriaProvider.prototype.getBySupermercado = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.HttpProvider.get("http://192.168.25.9:8080/api/categoria/supermercado/" + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    CategoriaProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, http_2.HttpProvider])
    ], CategoriaProvider);
    return CategoriaProvider;
}());
exports.CategoriaProvider = CategoriaProvider;
//# sourceMappingURL=categoria.js.map