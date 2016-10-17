import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { AppService } from '../../app.service'

@NgModule({
    imports: [BrowserModule],
    declarations: [HomeComponent],
    bootstrap: [HomeComponent]
})

@Component({
    templateUrl: './app/components/home/home.html'
})

export class HomeComponent implements OnInit {


    constructor(private _appService : AppService) {
        
        
    }

    ngOnInit() {

        this._appService.Reset();

        localStorage.clear();
    }
}
