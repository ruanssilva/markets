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
var DisponibilidadeComponent = (function () {
    function DisponibilidadeComponent(AppService, _router) {
        this.AppService = AppService;
        this._router = _router;
        this.disponibilidades = null;
    }
    DisponibilidadeComponent.prototype.Compras = function () {
        this._router.navigateByUrl('/produto');
    };
    DisponibilidadeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AppService.__getSupermercado().then(function (wait) {
            _this.AppService.getDisponibilidades(_this.AppService.Supermercado._id)
                .then(function (wait2) {
                _this.disponibilidades = wait2;
            });
        });
    };
    DisponibilidadeComponent.prototype.Disponibilidade = function (disponibilidade) {
        this.AppService.Disponibilidade = disponibilidade;
    };
    DisponibilidadeComponent.prototype.Agendar = function (agendar) {
        this.AppService.Agendar = agendar;
    };
    DisponibilidadeComponent.prototype.getDia = function (dia) {
        var result = false;
        if (this.AppService.Disponibilidades != null)
            this.AppService.Disponibilidades.forEach(function (disponibilidade) {
                if (disponibilidade.dia == dia)
                    result = true;
            });
        return result;
    };
    DisponibilidadeComponent.prototype.setDia = function (dia) {
        var _this = this;
        this.AppService.Disponibilidade = null;
        this.dia = dia;
        this.disponibilidades = [];
        this.AppService.Disponibilidades.forEach(function (disponibilidade) {
            if (disponibilidade.dia == dia)
                _this.disponibilidades.push(disponibilidade);
        });
    };
    DisponibilidadeComponent = __decorate([
        core_1.Component({
            templateUrl: './app/components/disponibilidade/disponibilidade.html',
            providers: []
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, router_1.Router])
    ], DisponibilidadeComponent);
    return DisponibilidadeComponent;
}());
exports.DisponibilidadeComponent = DisponibilidadeComponent;
//# sourceMappingURL=disponibilidade.js.map