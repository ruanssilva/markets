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
var platform_browser_1 = require('@angular/platform-browser');
var home_1 = require("./components/home/home");
var cep_1 = require("./components/cep/cep");
var about_1 = require("./components/about/about");
var produto_1 = require("./components/produto/produto");
var supermercado_1 = require("./components/supermercado/supermercado");
var disponibilidade_1 = require("./components/disponibilidade/disponibilidade");
var login_1 = require("./components/login/login");
var entrar_1 = require("./components/entrar/entrar");
var registrar_1 = require("./components/registrar/registrar");
var app_component_1 = require("./app.component");
var app_service_1 = require("./app.service");
var router_1 = require('@angular/router');
var produto_2 = require('./providers/produto');
var supermercado_2 = require('./providers/supermercado');
var categoria_1 = require('./providers/categoria');
var disponibilidade_2 = require('./providers/disponibilidade');
var reserva_1 = require('./providers/reserva');
var carrinho_1 = require('./providers/carrinho');
var usuario_1 = require('./providers/usuario');
var cognitive_1 = require('./providers/cognitive');
var login_2 = require('./providers/login');
var http_1 = require('./providers/http');
var http_2 = require('@angular/http');
var forms_1 = require('@angular/forms');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_2.HttpModule, http_2.JsonpModule, forms_1.FormsModule, forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot([
                    { path: 'produto', component: produto_1.ProdutoComponent },
                    { path: 'cep', component: cep_1.CepComponent },
                    { path: 'entrar', component: entrar_1.EntrarComponent },
                    { path: 'registrar', component: registrar_1.RegistrarComponent },
                    { path: 'supermercado', component: supermercado_1.SupermercadoComponent },
                    { path: 'disponibilidade', component: disponibilidade_1.DisponibilidadeComponent },
                    // {
                    //     path: 'heroes',
                    //     component: HomeComponent,
                    //     data: {
                    //         title: 'Heroes List'
                    //     }
                    // },
                    { path: '', component: home_1.HomeComponent },
                    { path: '**', component: home_1.HomeComponent }
                ])],
            declarations: [home_1.HomeComponent, cep_1.CepComponent, app_component_1.AppComponent, entrar_1.EntrarComponent, registrar_1.RegistrarComponent, disponibilidade_1.DisponibilidadeComponent, about_1.AboutComponent, produto_1.ProdutoComponent, login_1.LoginComponent, supermercado_1.SupermercadoComponent],
            bootstrap: [app_component_1.AppComponent, login_1.LoginComponent],
            providers: [http_1.HttpProvider, produto_2.ProdutoProvider, supermercado_2.SupermercadoProvider, login_2.LoginProvider, usuario_1.UsuarioProvider, categoria_1.CategoriaProvider, disponibilidade_2.DisponibilidadeProvider, reserva_1.ReservaProvider, carrinho_1.CarrinhoProvider, cognitive_1.CognitiveProvider, app_service_1.AppService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map