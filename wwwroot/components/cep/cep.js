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
var platform_browser_1 = require('@angular/platform-browser');
var core_2 = require('@angular/core');
var router_1 = require('@angular/router');
var app_service_1 = require('../../app.service');
var forms_1 = require('@angular/forms');
var CepComponent = (function () {
    function CepComponent(AppService, Router) {
        this.AppService = AppService;
        this.Router = Router;
    }
    CepComponent.prototype.ngOnInit = function () {
        this.cep = new forms_1.FormControl(this.AppService.Cep, forms_1.Validators.required);
        this.form = new forms_1.FormGroup({});
        this.form.addControl("cep", this.cep);
    };
    CepComponent.prototype.Cep = function () {
        this.AppService.__setCep(this.cep.value).then(function (wait) {
        });
        this.Router.navigateByUrl("/supermercado");
    };
    CepComponent = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [CepComponent],
            bootstrap: [CepComponent]
        }),
        core_2.Component({
            templateUrl: './app/components/cep/cep.html'
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, router_1.Router])
    ], CepComponent);
    return CepComponent;
}());
exports.CepComponent = CepComponent;
//# sourceMappingURL=cep.js.map