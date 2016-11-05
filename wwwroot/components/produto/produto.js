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
var produto_1 = require('../../providers/produto');
var categoria_1 = require('../../providers/categoria');
var cognitive_1 = require('../../providers/cognitive');
var compra_1 = require('../../models/compra');
var app_service_1 = require('../../app.service');
var ProdutoComponent = (function () {
    function ProdutoComponent(ProdutoProvider, CategoriaProvider, CognitiveProvider, AppService, Router) {
        this.ProdutoProvider = ProdutoProvider;
        this.CategoriaProvider = CategoriaProvider;
        this.CognitiveProvider = CognitiveProvider;
        this.AppService = AppService;
        this.Router = Router;
        this.produtos = [];
        this.categorias = [];
    }
    ProdutoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AppService.__getSupermercado()
            .then(function (wait) {
            _this.categorias = [];
            // this.CategoriaProvider.getBySupermercado(wait._id)
            //     .then(wait2 => {
            //         this.categorias = wait2;
            //     });
        });
    };
    ProdutoComponent.prototype.Adicionar = function (produto) {
        var r = false;
        this.AppService.Carrinho.compras.forEach(function (element) {
            if (element.produto_id == produto._id) {
                element.quantidade++;
                element.valor = produto.preco * element.quantidade;
                if (produto.peso)
                    element.valor = element.valor * 0.2;
                r = true;
            }
        });
        if (!r) {
            var compra = new compra_1.Compra();
            compra.produto_id = produto._id;
            compra.quantidade = 1;
            compra.valor = produto.preco * compra.quantidade;
            if (produto.peso)
                compra.valor = compra.valor * 0.2;
            this.AppService.Carrinho.compras.push(compra);
        }
        this.AppService.__setCarrinho(this.AppService.Carrinho).then(function (wait) {
        });
    };
    ProdutoComponent.prototype.Remover = function (produto) {
        var r = false;
        this.AppService.Carrinho.compras.forEach(function (element) {
            if (element.produto_id == produto._id) {
                if (element.quantidade > 0)
                    element.quantidade--;
                element.valor = produto.preco * element.quantidade;
                if (produto.peso)
                    element.valor = element.valor * 0.2;
                r = true;
            }
        });
        this.AppService.__setCarrinho(this.AppService.Carrinho).then(function (wait) {
        });
    };
    ProdutoComponent.prototype.Itens = function () {
        var r = 0;
        if (this.AppService.Carrinho != null)
            this.AppService.Carrinho.compras.forEach(function (element) {
                r += element.quantidade;
            });
        return r;
    };
    ProdutoComponent.prototype.Valor = function () {
        var r = 0;
        if (this.AppService.Carrinho != null)
            this.AppService.Carrinho.compras.forEach(function (element) {
                r += element.valor;
            });
        return r;
    };
    ProdutoComponent.prototype.Image = function (produto) {
        // produto.thumbnail = "http://www.unilestemg.br//arq/video/depoimento/2016/02-vanessa-lopes-e-lurima-uane/02-vanessa-lopes-e-lurima-uane.jpg";
        this.CognitiveProvider.get(produto.descricao)
            .then(function (wait) {
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
    };
    ProdutoComponent.prototype.Quantidade = function (produto) {
        var r = 0;
        if (produto != null && this.AppService.Carrinho != null) {
            if (this.AppService.Carrinho.compras != null) {
                this.AppService.Carrinho.compras.forEach(function (element) {
                    if (element.produto_id == produto._id) {
                        r = element.quantidade;
                    }
                });
            }
        }
        return r;
    };
    // Manual(produto: Produto, event) {
    //     console.log(event);
    //     this.compra[produto._id] = event.target.value;
    //     event.srcElement.value = "";
    // }
    ProdutoComponent.prototype.Produto = function (produto) {
        this.produto = produto;
    };
    ProdutoComponent.prototype.Categorias = function (tipo) {
        var _this = this;
        this.tipo = tipo;
        this.categoria = null;
        this.produtos = [];
        this.CategoriaProvider.getByTipo(tipo, this.AppService.Supermercado._id)
            .then(function (wait) {
            _this.categorias = wait;
            if (_this.categorias.length > 0)
                _this.Categoria(_this.categorias[0]);
        });
    };
    ProdutoComponent.prototype.Search = function () {
        var _this = this;
        this.searching = true;
        if (this.categoria != null && this.search != "") {
            this.ProdutoProvider.searchByCategoria(this.categoria._id, this.search)
                .then(function (wait) {
                _this.produtos = wait;
                _this.searching = false;
            });
        }
        else {
            this.searching = false;
        }
    };
    ProdutoComponent.prototype.Categoria = function (categoria) {
        var _this = this;
        this.categoria = categoria;
        this.ProdutoProvider.getByCategoria(categoria._id)
            .then(function (data) {
            // this.Image(data[0]);
            _this.produtos = data;
        });
    };
    ProdutoComponent = __decorate([
        core_1.Component({
            templateUrl: './app/components/produto/produto.html'
        }), 
        __metadata('design:paramtypes', [produto_1.ProdutoProvider, categoria_1.CategoriaProvider, cognitive_1.CognitiveProvider, app_service_1.AppService, router_1.Router])
    ], ProdutoComponent);
    return ProdutoComponent;
}());
exports.ProdutoComponent = ProdutoComponent;
//# sourceMappingURL=produto.js.map