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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var carrinho_1 = require('./models/carrinho');
var supermercado_1 = require('./providers/supermercado');
var categoria_1 = require('./providers/categoria');
var disponibilidade_1 = require('./providers/disponibilidade');
var carrinho_2 = require('./providers/carrinho');
var AppService = (function () {
    /**
     *
     */
    function AppService(_supermercadoProvider, _categoriaProvider, _disponibilidadeProvider, CarrinhoProvider, _router) {
        // alert('constructor #AppService');
        var _this = this;
        this._supermercadoProvider = _supermercadoProvider;
        this._categoriaProvider = _categoriaProvider;
        this._disponibilidadeProvider = _disponibilidadeProvider;
        this.CarrinhoProvider = CarrinhoProvider;
        this._router = _router;
        this.Compra = [];
        this.Agendar = false;
        this.__getCep().then(function (wait) {
            _this.Cep = wait;
        });
        this.__getSupermercado().then(function (wait) {
            _this.Supermercado = wait;
        });
        this.__getCarrinho().then(function (wait) {
            if (wait == null) {
                _this.Carrinho = new carrinho_1.Carrinho();
                _this.Carrinho.compras = [];
            }
            else
                _this.Carrinho = wait;
        });
    }
    AppService.prototype.ngOnInit = function () {
    };
    AppService.prototype.isSupermercado = function () {
        return this.getCep() != null;
    };
    AppService.prototype.setCep = function (cep) {
        localStorage.setItem("#cep", cep);
    };
    AppService.prototype.getCep = function () {
        return localStorage.getItem("#cep");
    };
    AppService.prototype.getCategorias = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._categoriaProvider.getBySupermercado(id)
                .then(function (data) {
                _this.Categorias = data;
                resolve(_this.Categorias);
            });
        });
    };
    AppService.prototype.getDisponibilidades = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._disponibilidadeProvider.getBySupermercado(id)
                .then(function (data) {
                _this.Disponibilidades = data;
                resolve(_this.Disponibilidades);
            });
        });
    };
    // comentario
    AppService.prototype.__setCep = function (cep) {
        var _this = this;
        return new Promise(function (resolve) {
            localStorage.setItem("#cep#", cep);
            _this.Cep = cep;
            resolve();
        });
    };
    AppService.prototype.__getCep = function () {
        return new Promise(function (resolve) {
            resolve(localStorage.getItem("#cep#"));
        });
    };
    AppService.prototype.__setAgendar = function (agendar) {
        return new Promise(function (resolve) {
            localStorage.setItem("#agendar#", agendar ? "1" : "0");
            resolve();
        });
    };
    AppService.prototype.__getAgendar = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.Agendar = localStorage.getItem("#agendar#") == "1";
            resolve(_this.Agendar);
        });
    };
    AppService.prototype.__setDisponibilidade = function (disponibilidade) {
        return new Promise(function (resolve) {
            localStorage.setItem("#disponibilidadeid#", disponibilidade._id);
            resolve();
        });
    };
    AppService.prototype.__getDisponibilidade = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var _id = localStorage.getItem("#disponibilidadeid#");
            if (_id) {
                if (_this.Disponibilidade != null && _this.Disponibilidade._id == _id)
                    resolve(_this.Disponibilidade);
                _this._disponibilidadeProvider.getById(_id)
                    .then(function (data) {
                    _this.Disponibilidade = data;
                    resolve(data);
                });
            }
            else
                resolve(null);
        });
    };
    AppService.prototype.__setCarrinho = function (carrinho) {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.Carrinho._id != null) {
                var _id = localStorage.getItem("#carrinhoid#");
                carrinho._id = _id;
                _this.CarrinhoProvider.put(carrinho).then(function (wait) {
                    resolve(wait);
                });
            }
            else {
                _this.CarrinhoProvider.post(carrinho)
                    .then(function (wait) {
                    _this.Carrinho = wait;
                    localStorage.setItem("#carrinhoid#", wait._id);
                    resolve(wait);
                });
            }
        });
    };
    AppService.prototype.__getCarrinho = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var _id = localStorage.getItem("#carrinhoid#");
            console.log(_id);
            if (_id != null) {
                _this.CarrinhoProvider.getById(_id).then(function (wait) {
                    if (wait == null) {
                        _id = null;
                        localStorage.setItem("#carrinhoid#", _id);
                    }
                    resolve(wait);
                });
            }
            if (_id == null) {
                _this.Carrinho = new carrinho_1.Carrinho();
                _this.Carrinho.compras = [];
                resolve(_this.Carrinho);
            }
        });
    };
    AppService.prototype.__setSupermercado = function (supermercado) {
        var _this = this;
        return new Promise(function (resolve) {
            localStorage.setItem("#supermercadoid#", supermercado._id);
            _this.Supermercado = supermercado;
            resolve();
        });
    };
    AppService.prototype.__getSupermercado = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var _id = localStorage.getItem("#supermercadoid#");
            if (_id) {
                if (_this.Supermercado != null && _this.Supermercado._id == _id) {
                    resolve(_this.Supermercado);
                }
                else {
                    _this._supermercadoProvider.getById(_id)
                        .then(function (data) {
                        resolve(data);
                    });
                }
            }
            else
                resolve(null);
        });
    };
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [supermercado_1.SupermercadoProvider, categoria_1.CategoriaProvider, disponibilidade_1.DisponibilidadeProvider, carrinho_2.CarrinhoProvider, router_1.Router])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map