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
var router_1 = require('@angular/router');
var supermercado_1 = require('./providers/supermercado/supermercado');
var categoria_1 = require('./providers/categoria/categoria');
var AppService = (function () {
    /**
     *
     */
    function AppService(_supermercadoProvider, _categoriaProvider, _router) {
        this._supermercadoProvider = _supermercadoProvider;
        this._categoriaProvider = _categoriaProvider;
        this._router = _router;
    }
    AppService.prototype.ngOnInit = function () {
    };
    AppService.prototype.setCep = function (cep) {
    };
    AppService.prototype.Reset = function () {
        this.Supermercado = null;
    };
    AppService.prototype.setSupermercado = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            localStorage.setItem("supermercado", id);
            _this.getSupermercado().then(function (t) {
                resolve(t);
            });
        });
    };
    AppService.prototype.getSupermercado = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._supermercadoProvider.getById(localStorage.getItem("supermercado"))
                .then(function (data) {
                _this.Supermercado = data;
                resolve(_this.Supermercado);
            });
        });
    };
    AppService.prototype.getCategorias = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._categoriaProvider.getBySupermercado(id)
                .then(function (data) {
                _this.Categorias = data;
                resolve(_this.Categorias);
            });
        });
    };
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [supermercado_1.SupermercadoProvider, categoria_1.CategoriaProvider, router_1.Router])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map