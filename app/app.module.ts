import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HomeComponent } from "./components/home/home"
import { CepComponent } from "./components/cep/cep"
import { AboutComponent } from "./components/about/about"
import { ProdutoComponent } from "./components/produto/produto"
import { SupermercadoComponent } from "./components/supermercado/supermercado"
import { DisponibilidadeComponent } from "./components/disponibilidade/disponibilidade"
import { LoginComponent } from "./components/login/login"

import { AppComponent } from "./app.component"
import { AppService } from "./app.service"


import { RouterModule } from '@angular/router';


import { ProdutoProvider } from './providers/produto';
import { SupermercadoProvider } from './providers/supermercado';
import { CategoriaProvider } from './providers/categoria';
import { DisponibilidadeProvider } from './providers/disponibilidade';
import { ReservaProvider } from './providers/reserva';
import { CarrinhoProvider } from './providers/carrinho';
import { CognitiveProvider } from './providers/cognitive';


import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule, FormsModule, ReactiveFormsModule,
        RouterModule.forRoot([
            { path: 'produto', component: ProdutoComponent },
            { path: 'cep', component: CepComponent },
            { path: 'supermercado', component: SupermercadoComponent },
            { path: 'disponibilidade', component: DisponibilidadeComponent },
            // {
            //     path: 'heroes',
            //     component: HomeComponent,
            //     data: {
            //         title: 'Heroes List'
            //     }
            // },
            { path: '', component: HomeComponent },
            { path: '**', component: HomeComponent }
        ])],
    declarations: [HomeComponent, CepComponent, AppComponent, DisponibilidadeComponent, AboutComponent, ProdutoComponent, LoginComponent, SupermercadoComponent],
    bootstrap: [AppComponent, LoginComponent],
    providers: [ProdutoProvider, SupermercadoProvider, CategoriaProvider, DisponibilidadeProvider, ReservaProvider, CarrinhoProvider,CognitiveProvider, AppService]
})

export class AppModule {



}