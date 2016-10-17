"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var http_1 = require('@angular/http');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule, [http_1.Http, http_1.HttpModule, http_1.ConnectionBackend]);
//# sourceMappingURL=startup.js.map