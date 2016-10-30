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
var forms_1 = require('@angular/forms');
var LoginComponent = (function () {
    /**
     *
     */
    function LoginComponent() {
        this.modal = false;
        this.form = new forms_1.FormGroup({});
        this.email = new forms_1.FormControl('', forms_1.Validators.required);
        this.password = new forms_1.FormControl('', forms_1.Validators.required);
        this.form.addControl('email', this.email);
        this.form.addControl('password', this.password);
    }
    LoginComponent.prototype.Login = function () {
        this.user = {
            id: "1",
            nome: "Ruan Silva",
            email: "ruansilva@outlook.com",
            cep: "35164-403",
            enderecos: []
        };
        this.nome = this.user.nome;
        alert(this.email.value);
        this.Modal(false);
    };
    LoginComponent.prototype.Logout = function () {
        this.user = null;
    };
    LoginComponent.prototype.Modal = function (show) {
        this.modal = show;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'my-login',
            templateUrl: './app/components/login/login.html'
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.js.map