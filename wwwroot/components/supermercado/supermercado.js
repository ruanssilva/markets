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
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var app_service_1 = require('../../app.service');
var supermercado_1 = require('../../providers/supermercado/supermercado');
var categoria_1 = require('../../providers/categoria/categoria');
var SupermercadoComponent = (function () {
    function SupermercadoComponent(_appService, _supermercadoProvider, _categoriaProvider, router) {
        this._appService = _appService;
        this._supermercadoProvider = _supermercadoProvider;
        this._categoriaProvider = _categoriaProvider;
        this.router = router;
        this.cep = localStorage.getItem("cep");
        this.supermercados = null;
    }
    SupermercadoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._supermercadoProvider.get()
            .then(function (data) {
            _this.supermercados = data;
        });
    };
    SupermercadoComponent.prototype.Supermercado = function (id) {
        var _this = this;
        this._appService.setSupermercado(id).then(function (t) {
            _this.router.navigateByUrl('/produto');
        });
    };
    SupermercadoComponent.prototype.Outro = function () {
        this._appService.getSupermercado();
    };
    SupermercadoComponent.prototype.teste = function (id) {
        this._categoriaProvider.post({
            supermercado_id: id,
            nome: "Categoria 2",
            descricao: "Descrição categoria 2"
        });
    };
    SupermercadoComponent = __decorate([
        core_1.Component({
            templateUrl: './app/components/supermercado/supermercado.html'
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, supermercado_1.SupermercadoProvider, categoria_1.CategoriaProvider, router_1.Router])
    ], SupermercadoComponent);
    return SupermercadoComponent;
}());
exports.SupermercadoComponent = SupermercadoComponent;
//# sourceMappingURL=supermercado.js.map