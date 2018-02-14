webpackJsonp(["main"],{

/***/ "../../../../../ClientApp/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n        <a class=\"navbar-brand\" href=\"#\">{{pageTitle}}</a>\r\n        <button class=\"navbar-toggler\"\r\n                type=\"button\"\r\n                data-toggle=\"collapse\"\r\n                data-target=\"#navbarSupportedContent\"\r\n                aria-controls=\"navbarSupportedContent\"\r\n                aria-expanded=\"false\"\r\n                aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\" href=\"#\">Links <span class=\"sr-only\">(current)</span></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#\">Categories</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n    <div class='container-fluid'>\r\n        <roamclip-categories></roamclip-categories>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageTitle = 'The Roaming Clipboard!';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'roamclip-root',
            template: __webpack_require__("../../../../../ClientApp/app/app.component.html"),
            styles: ["\nthead {\n    color: #202020;\n}"]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../ClientApp/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ngx_bootstrap_1 = __webpack_require__("../../../../ngx-bootstrap/index.js");
var app_component_1 = __webpack_require__("../../../../../ClientApp/app/app.component.ts");
var categories_component_1 = __webpack_require__("../../../../../ClientApp/app/categories/categories.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                categories_component_1.CategoriesComponent
            ],
            imports: [
                ngx_bootstrap_1.AlertModule.forRoot(),
                platform_browser_1.BrowserModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../ClientApp/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='panel panel/primary'>\r\n    <div class='panel-heading'>\r\n        Categories\r\n        <button type=\"button\" \r\n                class=\"btn btn-default\">Add Category</button>\r\n    </div>\r\n    <div class='panel-body'>\r\n        <div class='table-responsive'>\r\n            <table class='table'>\r\n                <thead>\r\n                    <tr>\r\n                        <th>Category</th>\r\n                        <th>Last used</th>\r\n                        <th>Link count</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor='let item of Categories'>\r\n                        <td>{{ category.Description }}</td>\r\n                        <td>{{ category.LastUsed }}</td>\r\n                        <td>{{ category.LinkCount }}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/categories/categories.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent() {
        this.pageTitel = 'Clipboard Categories';
    }
    CategoriesComponent = __decorate([
        core_1.Component({
            selector: 'roamclip-categories',
            template: __webpack_require__("../../../../../ClientApp/app/categories/categories.component.html")
        })
    ], CategoriesComponent);
    return CategoriesComponent;
}());
exports.CategoriesComponent = CategoriesComponent;


/***/ }),

/***/ "../../../../../ClientApp/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../ClientApp/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../ClientApp/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../ClientApp/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../ClientApp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map