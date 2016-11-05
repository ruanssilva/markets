import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginProvider } from '../../providers/login'

import { User } from '../../models/user'

import { AppService } from '../../app.service'

@Component({
    selector: 'my-login',
    templateUrl: './app/components/login/login.html'
})

export class LoginComponent implements OnInit {

    public form: FormGroup;

    public email: FormControl;
    public password: FormControl;


    /**
     *
     */
    constructor(
        private AppService: AppService,
        private Router: Router
    ) {
        this.form = new FormGroup({});

        this.email = new FormControl('', Validators.required);
        this.password = new FormControl('', Validators.required);

        this.form.addControl('email', this.email);
        this.form.addControl('password', this.password);

    }

    ngOnInit() {
        this.AppService.__getUsuario()
            .then(wait => {
                
            })
    }

    public modal: boolean = false;

    public user: User;
    public nome: String;

    Login(): void {
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
    }

    Logout(): void {
        this.AppService.__setToken(null)
            .then(wait => {
                this.Router.navigateByUrl('/');
            })
    }

    Modal(show: boolean): void {
        this.modal = show;
    }



}
