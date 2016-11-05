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
var core_2 = require('@angular/core');
var app_service_1 = require('../../app.service');
var supermercado_1 = require('../../models/supermercado');
var HomeComponent = (function () {
    function HomeComponent(AppService, Router) {
        this.AppService = AppService;
        this.Router = Router;
        this.setSupermercado = new core_1.EventEmitter();
    }
    HomeComponent.prototype.ngOnInit = function () {
        // if (this.AppService.Cep == null)
        //     this.Router.navigateByUrl("/cep");
        // else
        //     this.Router.navigateByUrl("/supermercado");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', supermercado_1.Supermercado)
    ], HomeComponent.prototype, "supermercado", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HomeComponent.prototype, "setSupermercado", void 0);
    HomeComponent = __decorate([
        core_2.Component({
            templateUrl: './app/components/home/home.html'
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.js.map