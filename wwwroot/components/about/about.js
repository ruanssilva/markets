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
var core_2 = require('@angular/core');
var AboutComponent = (function () {
    function AboutComponent() {
        this.Teste = "Opa!!";
    }
    AboutComponent.prototype.Alert = function () {
        this.Array = [1, 2, 3, 4, 5, 6];
    };
    AboutComponent = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [AboutComponent],
            bootstrap: [AboutComponent]
        }),
        core_2.Component({
            templateUrl: './app/components/about/about.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.js.map