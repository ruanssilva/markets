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
var DisponibilidadeProvider = (function () {
    function DisponibilidadeProvider(http) {
        this.http = http;
    }
    DisponibilidadeProvider.prototype.get = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return _this.http.get("http://192.168.25.9:8080/api/disponibilidade")
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    DisponibilidadeProvider.prototype.getById = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("http://192.168.25.9:8080/api/disponibilidade/" + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    DisponibilidadeProvider.prototype.getBySupermercado = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("http://192.168.25.9:8080/api/disponibilidade/supermercado/" + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    DisponibilidadeProvider.prototype.post = function (disponibilidade) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/json');
            _this.http.post("http://192.168.25.9:8080/api/disponibilidade", JSON.stringify(disponibilidade), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    DisponibilidadeProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DisponibilidadeProvider);
    return DisponibilidadeProvider;
}());
exports.DisponibilidadeProvider = DisponibilidadeProvider;
//# sourceMappingURL=disponibilidade.js.map