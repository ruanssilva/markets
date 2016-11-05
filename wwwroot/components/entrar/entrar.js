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
var forms_1 = require('@angular/forms');
var login_1 = require('../../providers/login');
var usuario_1 = require('../../models/usuario');
var app_service_1 = require('../../app.service');
var EntrarComponent = (function () {
    function EntrarComponent(LoginProvider, AppService, Router) {
        this.LoginProvider = LoginProvider;
        this.AppService = AppService;
        this.Router = Router;
        this.messages = [];
        this.registered = false;
        this.form = new forms_1.FormGroup({});
        this.email = new forms_1.FormControl('', forms_1.Validators.required);
        this.senha = new forms_1.FormControl('', forms_1.Validators.required);
        this.form.addControl('email', this.email);
        this.form.addControl('senha', this.senha);
    }
    EntrarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AppService.__getUsuario()
            .then(function (wait) {
            if (wait != null)
                _this.Router.navigateByUrl('/');
        });
    };
    EntrarComponent.prototype.Reset = function (t) {
        this.messages[t] = null;
    };
    EntrarComponent.prototype.Submit = function () {
        var _this = this;
        if (this.form.valid) {
            var erros_1 = false;
            ["email", "confirma"].forEach(function (element) {
                erros_1 = erros_1 || _this.messages[element];
            });
            if (erros_1) {
                this.messages["warning"] = "Ops! Formulário possui algumas informações inválidas, corrija-as e tente novamente.";
            }
            else if (this.form.valid) {
                var usuario = new usuario_1.Usuario();
                usuario.email = this.email.value;
                usuario.senha = this.senha.value;
                this.LoginProvider.post(usuario)
                    .then(function (wait) {
                    if (wait == null)
                        _this.messages["error"] = "Ops! Não foi possível realizar autenticação. Tente novamente mais tarde.";
                    else {
                        if (wait.Success) {
                            _this.AppService.__setToken(wait.Token);
                            _this.Router.navigateByUrl('/');
                        }
                        else {
                            _this.messages["warning"] = "E-mail e senha inválidos. Tente novamente.";
                        }
                    }
                });
            }
        }
    };
    EntrarComponent = __decorate([
        core_1.Component({
            templateUrl: './app/components/entrar/entrar.html'
        }), 
        __metadata('design:paramtypes', [login_1.LoginProvider, app_service_1.AppService, router_1.Router])
    ], EntrarComponent);
    return EntrarComponent;
}());
exports.EntrarComponent = EntrarComponent;
//# sourceMappingURL=entrar.js.map