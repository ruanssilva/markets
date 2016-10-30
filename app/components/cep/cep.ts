import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../../app.service'

import { FormGroup, FormControl, Validators } from '@angular/forms';

@NgModule({
    imports: [BrowserModule],
    declarations: [CepComponent],
    bootstrap: [CepComponent]
})

@Component({
    templateUrl: './app/components/cep/cep.html'
})

export class CepComponent implements OnInit {

    public form: FormGroup;
    public cep: FormControl;

    constructor(
        private AppService: AppService,
        private Router: Router
    ) {


    }

    ngOnInit() {

        this.cep = new FormControl(this.AppService.Cep, Validators.required);
        this.form = new FormGroup({});
        this.form.addControl("cep", this.cep);

    }

    Cep(): void {
        this.AppService.__setCep(this.cep.value).then(wait => {
            
        });
        this.Router.navigateByUrl("/supermercado");
    }
}
