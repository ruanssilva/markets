import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HomeComponent } from "./components/home/home"
import { CepComponent } from "./components/cep/cep"
import { AboutComponent } from "./components/about/about"
import { ProdutoComponent } from "./components/produto/produto"
import { SupermercadoComponent } from "./components/supermercado/supermercado"
import { DisponibilidadeComponent } from "./components/disponibilidade/disponibilidade"
import { LoginComponent } from "./components/login/login"
import { EntrarComponent } from "./components/entrar/entrar"
import { RegistrarComponent } from "./components/registrar/registrar"

import { AppComponent } from "./app.component"
import { AppService } from "./app.service"


import { RouterModule } from '@angular/router';


import { ProdutoProvider } from './providers/produto';
import { SupermercadoProvider } from './providers/supermercado';
import { CategoriaProvider } from './providers/categoria';
import { DisponibilidadeProvider } from './providers/disponibilidade';
import { ReservaProvider } from './providers/reserva';
import { CarrinhoProvider } from './providers/carrinho';
import { UsuarioProvider } from './providers/usuario';
import { CognitiveProvider } from './providers/cognitive';
import { LoginProvider } from './providers/login';
import { HttpProvider } from './providers/http';


import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule, FormsModule, ReactiveFormsModule,
        RouterModule.forRoot([
            { path: 'produto', component: ProdutoComponent },
            { path: 'cep', component: CepComponent },
            { path: 'entrar', component: EntrarComponent },
            { path: 'registrar', component: RegistrarComponent },
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
    declarations: [HomeComponent, CepComponent, AppComponent, EntrarComponent, RegistrarComponent, DisponibilidadeComponent, AboutComponent, ProdutoComponent, LoginComponent, SupermercadoComponent],
    bootstrap: [AppComponent, LoginComponent],
    providers: [HttpProvider, ProdutoProvider, SupermercadoProvider,LoginProvider, UsuarioProvider, CategoriaProvider, DisponibilidadeProvider, ReservaProvider, CarrinhoProvider, CognitiveProvider, AppService]
})

export class AppModule {



}