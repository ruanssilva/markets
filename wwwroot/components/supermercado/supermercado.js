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
var supermercado_1 = require('../../providers/supermercado');
var SupermercadoComponent = (function () {
    function SupermercadoComponent(AppService, SupermercadoProvider, _router) {
        this.AppService = AppService;
        this.SupermercadoProvider = SupermercadoProvider;
        this._router = _router;
        this.supermercados = null;
    }
    SupermercadoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.SupermercadoProvider.get()
            .then(function (supermercados) {
            _this.supermercados = supermercados;
        });
    };
    SupermercadoComponent.prototype.Supermercado = function (supermercado) {
        var _this = this;
        this.AppService.__setSupermercado(supermercado).then(function (wait) {
            _this._router.navigateByUrl('/disponibilidade');
        });
    };
    SupermercadoComponent = __decorate([
        core_1.Component({
            // selector:"my-page",
            templateUrl: './app/components/supermercado/supermercado.html'
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, supermercado_1.SupermercadoProvider, router_1.Router])
    ], SupermercadoComponent);
    return SupermercadoComponent;
}());
exports.SupermercadoComponent = SupermercadoComponent;
//# sourceMappingURL=supermercado.js.map