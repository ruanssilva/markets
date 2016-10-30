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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var ImagemProvider = (function () {
    function ImagemProvider(http) {
        this.http = http;
    }
    ImagemProvider.prototype.get = function (search) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.Headers();
            headers.append('Ocp-Apim-Subscription-Key', 'c98432bcf28647d6b9c753ce604221d9');
            return _this.http.get("https://api.cognitive.microsoft.com/bing/v5.0/search?q=" + encodeURIComponent(search) + "&mkt=pt-br")
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    ImagemProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ImagemProvider);
    return ImagemProvider;
}());
exports.ImagemProvider = ImagemProvider;
//# sourceMappingURL=imagem.js.map