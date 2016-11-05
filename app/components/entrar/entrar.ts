import { NgModule, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginProvider } from '../../providers/login'
import { Usuario } from '../../models/usuario'

import { AppService } from '../../app.service'
import { Supermercado } from '../../models/supermercado'


@Component({
    templateUrl: './app/components/entrar/entrar.html'
})

export class EntrarComponent implements OnInit {

    form: FormGroup
    email: FormControl
    senha: FormControl


    messages: string[] = []
    registered: boolean = false;

    constructor(
        private LoginProvider: LoginProvider,
        private AppService: AppService,
        private Router: Router
    ) {
        this.form = new FormGroup({});

        this.email = new FormControl('', Validators.required);
        this.senha = new FormControl('', Validators.required);

        this.form.addControl('email', this.email);
        this.form.addControl('senha', this.senha);
    }

    ngOnInit() {
        this.AppService.__getUsuario()
            .then(wait => {
                if (wait != null)
                    this.Router.navigateByUrl('/')
            });
    }

    Reset(t: string): void {
        this.messages[t] = null;
    }

    Submit(): void {

        if (this.form.valid) {

            let erros = false;

            ["email", "confirma"].forEach(element => {
                erros = erros || this.messages[element];
            });

            if (erros) {
                this.messages["warning"] = "Ops! Formulário possui algumas informações inválidas, corrija-as e tente novamente.";
            } else if (this.form.valid) {
                let usuario = new Usuario();

                usuario.email = this.email.value;
                usuario.senha = this.senha.value;

                this.LoginProvider.post(usuario)
                    .then(wait => {
                        if (wait == null)
                            this.messages["error"] = "Ops! Não foi possível realizar autenticação. Tente novamente mais tarde.";
                        else {
                            if (wait.Success) {
                                this.AppService.__setToken(wait.Token);
                                this.Router.navigateByUrl('/');
                            } else {
                                this.messages["warning"] = "E-mail e senha inválidos. Tente novamente.";
                            }
                        }
                    });
            }
        }
    }
}
