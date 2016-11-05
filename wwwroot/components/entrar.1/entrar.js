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
var usuario_1 = require('../../providers/usuario');
var usuario_2 = require('../../models/usuario');
var app_service_1 = require('../../app.service');
var EntrarComponent = (function () {
    function EntrarComponent(UsuarioProvider, AppService, Router) {
        this.UsuarioProvider = UsuarioProvider;
        this.AppService = AppService;
        this.Router = Router;
        this.messages = [];
        this.registered = false;
        this.form = new forms_1.FormGroup({});
        this.nome = new forms_1.FormControl('Ruan Silva', forms_1.Validators.required);
        this.sexo = new forms_1.FormControl('m', forms_1.Validators.required);
        this.cpf = new forms_1.FormControl('126.442.086-29', forms_1.Validators.required);
        this.nascimento = new forms_1.FormControl('13/09/1994', forms_1.Validators.required);
        this.email = new forms_1.FormControl('ruansilva@outlook.com', forms_1.Validators.required);
        this.celular = new forms_1.FormControl('(31)98814-9484', forms_1.Validators.required);
        this.telefone = new forms_1.FormControl('(31)3822-7145', forms_1.Validators.required);
        this.senha = new forms_1.FormControl('abc123', forms_1.Validators.required);
        this.confirma = new forms_1.FormControl('abc123', forms_1.Validators.required);
        this.form.addControl('nome', this.nome);
        this.form.addControl('sexo', this.sexo);
        this.form.addControl('cpf', this.cpf);
        this.form.addControl('nascimento', this.nascimento);
        this.form.addControl('email', this.email);
        this.form.addControl('celular', this.celular);
        this.form.addControl('telefone', this.telefone);
        this.form.addControl('senha', this.senha);
        this.form.addControl('confirma', this.confirma);
    }
    EntrarComponent.prototype.ngOnInit = function () {
    };
    EntrarComponent.prototype.Reset = function (t) {
        this.messages[t] = null;
    };
    EntrarComponent.prototype.Submit = function () {
        var _this = this;
        var erros = false;
        ["email", "confirma"].forEach(function (element) {
            erros = erros || _this.messages[element];
        });
        if (erros) {
            this.messages["warning"] = "Ops! Formulário possui algumas informações inválidas, corrija-as e tente novamente.";
        }
        else if (this.form.valid) {
            var usuario = new usuario_2.Usuario();
            usuario.email = this.email.value;
            usuario.senha = this.senha.value;
            usuario.nome = this.nome.value;
            usuario.sexo = this.sexo.value;
            usuario.cpf = this.cpf.value;
            usuario.nascimento = this.nascimento.value;
            usuario.telefone = this.telefone.value;
            usuario.celular = this.celular.value;
            this.UsuarioProvider.post(usuario)
                .then(function (wait) {
                if (wait == null)
                    _this.messages["error"] = "Ops! Não foi possível realizar o seu cadastro. Tente novamente mais tarde.";
                else {
                    _this.registered = true;
                    _this.AppService.__setUsuario(wait);
                    _this.form.reset();
                }
            });
        }
    };
    EntrarComponent.prototype.onconfirmachange = function ($event) {
        if (this.senha.value == $event.target.value)
            this.messages["confirma"] = null;
        else
            this.messages["confirma"] = "As senhas não conferem";
    };
    EntrarComponent.prototype.onemailchange = function ($event) {
        var _this = this;
        this.UsuarioProvider.getByEmail($event.target.value)
            .then(function (wait) {
            if (wait != null)
                _this.messages["email"] = "E-mail já cadastrado em outra conta";
            else
                _this.messages["email"] = null;
        });
    };
    EntrarComponent.prototype.oncpfkeypress = function ($event) {
        $event.target.value = this.mcpf($event.target.value);
    };
    EntrarComponent.prototype.onnascimentokeypress = function ($event) {
        $event.target.value = this.mnascimento($event.target.value);
    };
    EntrarComponent.prototype.mcpf = function (v) {
        return v.replace(/\D/g, "")
            .replace(/(\d{11})(\d)/, "$1")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    };
    EntrarComponent.prototype.mnascimento = function (v) {
        return v.replace(/\D/g, "")
            .replace(/(\d{8})(\d)/, "$1")
            .replace(/(\d{4})(\d)/, "$1/$2")
            .replace(/(\d{2})(\d)/, "$1/$2");
    };
    EntrarComponent = __decorate([
        core_1.Component({
            templateUrl: './app/components/entrar/entrar.html'
        }), 
        __metadata('design:paramtypes', [usuario_1.UsuarioProvider, app_service_1.AppService, router_1.Router])
    ], EntrarComponent);
    return EntrarComponent;
}());
exports.EntrarComponent = EntrarComponent;
//# sourceMappingURL=entrar.js.map