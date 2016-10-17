import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { Produto } from '../../providers/produto/produto'

import { AppService } from '../../app.service'

@Component({
    templateUrl: './app/components/produto/produto.html'
})

export class ProdutoComponent implements OnInit {

    supermercado: String = localStorage.getItem("supermercado");

    constructor(
        private produtoService: Produto,
        private _appService: AppService,
        private _router: Router
    ) {

    }

    ngOnInit() {
        if (this._appService.Supermercado != null)
            this._appService.getCategorias(this._appService.Supermercado._id);
        else
            this._router.navigateByUrl('/supermercado')
    }

    public Array: any;


    Alert(): void {
        this.produtoService.get().subscribe(data => {
            console.log(data);
            this.Array = data
        });
    }
}
