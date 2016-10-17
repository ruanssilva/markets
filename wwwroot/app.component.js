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
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var core_2 = require('@angular/core');
var app_service_1 = require('./app.service');
var supermercado_1 = require('./providers/supermercado/supermercado');
var AppComponent = (function () {
    function AppComponent(_supermercadoProvider, _appService, _router) {
        this._supermercadoProvider = _supermercadoProvider;
        this._appService = _appService;
        this._router = _router;
        this.supermercado = null;
        this.testando = app_service_1.AppService.Teste;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getSupermercado();
        this.cep = new forms_1.FormControl('', forms_1.Validators.required);
        this.form = new forms_1.FormGroup({});
        this.form.addControl('cep', this.cep);
    };
    AppComponent.prototype.getCep = function () {
        return localStorage.getItem("cep");
    };
    AppComponent.prototype.getSupermercado = function () {
        var _this = this;
        console.log('ola!');
        if (!localStorage.getItem("supermercado"))
            return null;
        if (this.supermercado == null || this.supermercado._id != localStorage.getItem("supermercado"))
            this._supermercadoProvider.getById(localStorage.getItem("supermercado").toString())
                .then(function (data) { return _this.supermercado = data; });
        return this.supermercado;
    };
    AppComponent.prototype.Cep = function () {
        localStorage.setItem("cep", this.cep.value);
        this._router.navigateByUrl('/supermercado');
    };
    AppComponent = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [AppComponent],
            bootstrap: [AppComponent]
        }),
        core_2.Component({
            selector: 'my-app',
            templateUrl: './app/views/layout.html'
        }), 
        __metadata('design:paramtypes', [supermercado_1.SupermercadoProvider, app_service_1.AppService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map