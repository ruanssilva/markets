import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { ProdutoProvider } from '../../providers/produto'
import { CategoriaProvider } from '../../providers/categoria'
import { CognitiveProvider } from '../../providers/cognitive'

import { Produto } from '../../models/produto';
import { Categoria } from '../../models/categoria';
import { Compra } from '../../models/compra';

import { AppService } from '../../app.service'

@Component({
    templateUrl: './app/components/produto/produto.html'
})

export class ProdutoComponent implements OnInit {

    categoria: Categoria;
    produtos: Array<Produto> = [];
    categorias: Array<Categoria> = [];
    quantidade: number;
    pesquisa: boolean;
    produto: Produto;

    constructor(
        private ProdutoProvider: ProdutoProvider,
        private CategoriaProvider: CategoriaProvider,
        private CognitiveProvider: CognitiveProvider,
        private AppService: AppService,
        private Router: Router
    ) {

    }

    ngOnInit() {

        this.AppService.__getSupermercado()
            .then(wait => {
                this.CategoriaProvider.getBySupermercado(wait._id)
                    .then(wait2 => {
                        this.categorias = wait2;
                    });

            });

    }

    Pesquisa(): void {
        this.pesquisa = true;
    }

    Adicionar(produto: Produto): void {
        let r = false;
        this.AppService.Carrinho.compras.forEach(element => {
            if (element.produto_id == produto._id) {
                element.quantidade++;
                element.valor = produto.preco * element.quantidade;
                r = true;
            }
        });
        if (!r) {
            let compra = new Compra();
            compra.produto_id = produto._id;
            compra.quantidade = 1;
            compra.valor = produto.preco * compra.quantidade;
            this.AppService.Carrinho.compras.push(compra);
        }
        this.AppService.__setCarrinho(this.AppService.Carrinho).then(wait => {

        });
    }

    Remover(produto: Produto): void {
        let r = false;
        this.AppService.Carrinho.compras.forEach(element => {
            if (element.produto_id == produto._id) {
                element.quantidade--;
                r = true;
            }
        });
        this.AppService.__setCarrinho(this.AppService.Carrinho).then(wait => {

        });
    }

    Itens(): number {
        let r = 0;
        if (this.AppService.Carrinho != null)
            this.AppService.Carrinho.compras.forEach(element => {
                r += element.quantidade;
            });
        return r;
    }

    Valor(): number {
        let r = 0;
        if (this.AppService.Carrinho != null)
            this.AppService.Carrinho.compras.forEach(element => {
                r += element.valor;
            });
        return r;
    }

    Image(produto : Produto ) : void {

        // produto.thumbnail = "http://www.unilestemg.br//arq/video/depoimento/2016/02-vanessa-lopes-e-lurima-uane/02-vanessa-lopes-e-lurima-uane.jpg";

        this.CognitiveProvider.get(produto.descricao)
        .then(wait => {

            console.log(wait);
            console.log(wait);
            console.log(wait);
            console.log(wait);
            console.log(wait);
            console.log(wait);
            console.log(wait);
            console.log(wait);

            produto.thumbnail = wait.value[0].thumbnailUrl;
        });        
    }



    Quantidade(produto: Produto): number {
        let r = 0;
        if (produto != null && this.AppService.Carrinho != null) {
            if (this.AppService.Carrinho.compras != null) {
                this.AppService.Carrinho.compras.forEach(element => {
                    if (element.produto_id == produto._id) {
                        r = element.quantidade
                    }
                });
            }
        }
        return r;
    }

    // Manual(produto: Produto, event) {
    //     console.log(event);
    //     this.compra[produto._id] = event.target.value;
    //     event.srcElement.value = "";
    // }

    Produto(produto: Produto): void {
        this.produto = produto;
    }

    Categoria(categoria: Categoria): void {

        this.categoria = categoria;

        this.ProdutoProvider.getByCategoria(categoria._id)
            .then(data => {
                this.Image(data[0]);
                this.produtos = data;
            });

    }
}
