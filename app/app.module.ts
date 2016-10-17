import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from "./components/home/home"
import { AboutComponent } from "./components/about/about"
import { ProdutoComponent } from "./components/produto/produto"
import { SupermercadoComponent } from "./components/supermercado/supermercado"
import { LoginComponent } from "./components/login/login"

import { AppComponent } from "./app.component"
import { AppService } from "./app.service"


import { RouterModule } from '@angular/router';


import { Produto } from './providers/produto/produto';
import { SupermercadoProvider } from './providers/supermercado/supermercado';
import { CategoriaProvider } from './providers/categoria/categoria';



import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule, FormsModule, ReactiveFormsModule,
        RouterModule.forRoot([
            { path: 'hero/:id', component: HomeComponent },
            { path: 'crisis-center', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'produto', component: ProdutoComponent },
            { path: 'supermercado', component: SupermercadoComponent },
            {
                path: 'heroes',
                component: HomeComponent,
                data: {
                    title: 'Heroes List'
                }
            },
            { path: '', component: HomeComponent },
            { path: '**', component: HomeComponent }
        ])],
    declarations: [HomeComponent, AppComponent, AboutComponent, ProdutoComponent, LoginComponent, SupermercadoComponent],
    bootstrap: [AppComponent, LoginComponent],
    providers: [ Produto, SupermercadoProvider, CategoriaProvider, AppService  ]
})

export class AppModule {

    


}