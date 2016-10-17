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
var produto_1 = require('../../providers/produto/produto');
var app_service_1 = require('../../app.service');
var ProdutoComponent = (function () {
    function ProdutoComponent(produtoService, _appService, _router) {
        this.produtoService = produtoService;
        this._appService = _appService;
        this._router = _router;
        this.supermercado = localStorage.getItem("supermercado");
    }
    ProdutoComponent.prototype.ngOnInit = function () {
        if (this._appService.Supermercado != null)
            this._appService.getCategorias(this._appService.Supermercado._id);
        else
            this._router.navigateByUrl('/supermercado');
    };
    ProdutoComponent.prototype.Alert = function () {
        var _this = this;
        this.produtoService.get().subscribe(function (data) {
            console.log(data);
            _this.Array = data;
        });
    };
    ProdutoComponent = __decorate([
        core_1.Component({
            templateUrl: './app/components/produto/produto.html'
        }), 
        __metadata('design:paramtypes', [produto_1.Produto, app_service_1.AppService, router_1.Router])
    ], ProdutoComponent);
    return ProdutoComponent;
}());
exports.ProdutoComponent = ProdutoComponent;
//# sourceMappingURL=produto.js.map