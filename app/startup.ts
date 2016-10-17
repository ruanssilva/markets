import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ModuleWithProviders } from '@angular/core';
import { AppModule } from './app.module';
import { Routes, RouterModule } from '@angular/router';
import { Http, HttpModule, ConnectionBackend } from '@angular/http';
const platform = platformBrowserDynamic();


platform.bootstrapModule(AppModule, [Http, HttpModule, ConnectionBackend]);
