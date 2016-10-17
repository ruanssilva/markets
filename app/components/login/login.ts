import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';

import { User } from '../../models/user'

@Component({
    selector: 'my-login',
    templateUrl: './app/components/login/login.html'
})

export class LoginComponent {

    public form: FormGroup;

    public email: FormControl;
    public password: FormControl;

    /**
     *
     */
    constructor() {
        this.form = new FormGroup({});

        this.email = new FormControl('', Validators.required);
        this.password = new FormControl('', Validators.required);
        
        this.form.addControl('email', this.email);
        this.form.addControl('password', this.password);

    }

    public modal: boolean = false;

    public user: User;
    public nome: String;

    Login(): void {
        this.user = {
            id: "1",
            nome: "Ruan Silva",
            email: "ruansilva@outlook.com",
            cep: "35164-403"
        };

        this.nome = this.user.nome;

        alert(this.email.value);

        this.Modal(false);
    }

    Logout(): void {
        this.user = null;
    }

    Modal(show: boolean): void {
        this.modal = show;
    }



}
