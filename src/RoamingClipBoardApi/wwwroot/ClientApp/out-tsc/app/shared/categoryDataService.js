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
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var CategoryDataService = /** @class */ (function () {
    function CategoryDataService(httpClient) {
        this.httpClient = httpClient;
        this.categories = [];
    }
    CategoryDataService.prototype.loadCategories = function () {
        var _this = this;
        return this.httpClient.get("/api/categoriesinfo")
            .map(function (data) {
            _this.categories = data;
            return true;
        });
    };
    CategoryDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CategoryDataService);
    return CategoryDataService;
}());
exports.CategoryDataService = CategoryDataService;
//# sourceMappingURL=categoryDataService.js.map