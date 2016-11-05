import { NgModule, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UsuarioProvider } from '../../providers/usuario'
import { Usuario } from '../../models/usuario'

import { AppService } from '../../app.service'
import { Supermercado } from '../../models/supermercado'


@Component({
    templateUrl: './app/components/registrar/registrar.html'
})

export class RegistrarComponent implements OnInit {

    form: FormGroup
    email: FormControl
    senha: FormControl
    confirma: FormControl
    nome: FormControl
    sexo: FormControl
    cpf: FormControl
    nascimento: FormControl
    telefone: FormControl
    celular: FormControl

    messages: string[] = []

    constructor(
        private UsuarioProvider: UsuarioProvider,
        private AppService: AppService,
        private Router: Router
    ) {
        this.form = new FormGroup({});

        this.nome = new FormControl('', Validators.required);
        this.sexo = new FormControl('', Validators.required);
        this.cpf = new FormControl('', Validators.required);
        this.nascimento = new FormControl('', Validators.required);
        this.email = new FormControl('', Validators.required);
        this.celular = new FormControl('', Validators.required);
        this.telefone = new FormControl('', Validators.required);
        this.senha = new FormControl('', Validators.required);
        this.confirma = new FormControl('', Validators.required);

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

    ngOnInit() {
        this.AppService.__getUsuario()
            .then(wait => {
                if (wait != null)
                    this.Router.navigateByUrl('/')
            });
    }

    Reset(t : string): void {
        this.messages[t] = null;
    }

    Submit(): void {

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
            usuario.nome = this.nome.value;
            usuario.sexo = this.sexo.value;
            usuario.cpf = this.cpf.value;
            usuario.nascimento = this.nascimento.value;
            usuario.telefone = this.telefone.value;
            usuario.celular = this.celular.value;

            this.UsuarioProvider.post(usuario)
                .then(wait => {
                    if (wait == null)
                        this.messages["error"] = "Ops! Não foi possível realizar o seu cadastro. Tente novamente mais tarde.";
                    else {
                        this.Router.navigateByUrl('/entrar');
                    }
                });
        }
    }

    onconfirmachange($event) {
        if (this.senha.value == $event.target.value)
            this.messages["confirma"] = null
        else
            this.messages["confirma"] = "As senhas não conferem";
    }

    onemailchange($event) {

        this.UsuarioProvider.getByEmail($event.target.value)
            .then(wait => {

                if (wait != null)
                    this.messages["email"] = "E-mail já cadastrado em outra conta";
                else
                    this.messages["email"] = null

            });
    }

    oncpfkeypress($event) {
        $event.target.value = this.mcpf($event.target.value);
    }

    onnascimentokeypress($event) {
        $event.target.value = this.mnascimento($event.target.value);
    }


    mcpf(v) {
        return v.replace(/\D/g, "")
            .replace(/(\d{11})(\d)/, "$1")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }

    mnascimento(v) {
        return v.replace(/\D/g, "")
            .replace(/(\d{8})(\d)/, "$1")
            .replace(/(\d{4})(\d)/, "$1/$2")
            .replace(/(\d{2})(\d)/, "$1/$2");
    }


}
