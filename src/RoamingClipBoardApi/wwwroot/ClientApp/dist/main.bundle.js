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

/***/ "../../../../../ClientApp/Models/catergory.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Category = /** @class */ (function () {
    function Category(categoryName, categoryDescription) {
        this.categoryName = categoryName;
        this.categoryDescription = categoryDescription;
    }
    return Category;
}());
exports.Category = Category;


/***/ }),

/***/ "../../../../../ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n        <a class=\"navbar-brand\" href=\"#\">{{pageTitle}}</a>\r\n        <button class=\"navbar-toggler\"\r\n                type=\"button\"\r\n                data-toggle=\"collapse\"\r\n                data-target=\"#navbarSupportedContent\"\r\n                aria-controls=\"navbarSupportedContent\"\r\n                aria-expanded=\"false\"\r\n                aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\" [routerLink]=\"'/links'\">Links<span class=\"sr-only\">(current)</span></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [routerLink]=\"'/categories'\">Categories</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n    <div class='container-fluid'>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n"

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
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var app_component_1 = __webpack_require__("../../../../../ClientApp/app/app.component.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var categories_component_1 = __webpack_require__("../../../../../ClientApp/app/categories/categories.component.ts");
var addCategory_component_1 = __webpack_require__("../../../../../ClientApp/app/categories/addCategory.component.ts");
var links_component_1 = __webpack_require__("../../../../../ClientApp/app/links/links.component.ts");
var categoryDataService_1 = __webpack_require__("../../../../../ClientApp/app/shared/categoryDataService.ts");
var linkDataService_1 = __webpack_require__("../../../../../ClientApp/app/shared/linkDataService.ts");
var appRoutes = [
    { path: 'categories', component: categories_component_1.CategoriesComponent },
    { path: 'addCategory', component: addCategory_component_1.AddCategoryComponent },
    { path: 'links', component: links_component_1.LinksComponent },
    { path: '', redirectTo: 'links', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                categories_component_1.CategoriesComponent,
                addCategory_component_1.AddCategoryComponent,
                links_component_1.LinksComponent
            ],
            imports: [
                router_1.RouterModule.forRoot(appRoutes, { enableTracing: true }),
                ngx_bootstrap_1.AlertModule.forRoot(),
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpClientModule
            ],
            providers: [
                categoryDataService_1.CategoryDataService,
                linkDataService_1.LinkDataService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../ClientApp/app/categories/addCategory.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var categoryDataService_1 = __webpack_require__("../../../../../ClientApp/app/shared/categoryDataService.ts");
var catergory_1 = __webpack_require__("../../../../../ClientApp/Models/catergory.ts");
var AddCategoryComponent = /** @class */ (function () {
    function AddCategoryComponent(data) {
        this.data = data;
        this.pageTitle = 'Add new category';
        this.category = new catergory_1.Category("", "");
        this.isAddAction = false;
    }
    AddCategoryComponent.prototype.onSubmit = function (form) {
        console.log('you submitted value:', form);
        console.log('isAddAction is', this.isAddAction);
    };
    AddCategoryComponent = __decorate([
        core_1.Component({
            selector: 'roamclip-addCategory',
            template: __webpack_require__("../../../../../ClientApp/app/categories/addcategory.component.html")
        }),
        __metadata("design:paramtypes", [categoryDataService_1.CategoryDataService])
    ], AddCategoryComponent);
    return AddCategoryComponent;
}());
exports.AddCategoryComponent = AddCategoryComponent;


/***/ }),

/***/ "../../../../../ClientApp/app/categories/addcategory.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <br />\r\n    <h2>{{pageTitle}}</h2>\r\n    <br />\r\n\r\n    <form class=\"form-horizontal\" #addCategory=\"ngForm\" (ngSubmit)=\"onSubmit(addCategory.value)\">\r\n        <div class=\"form-group\">\r\n            <label for=\"categoryName\" class=\"control-label col-sm-2\">Category</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"Text\" class=\"form-control\" id=\"categoryName\"\r\n                       placeholder=\"a new category name\"\r\n                       [(ngModel)]=\"category.categoryName\" name=\"categoryName\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"categoryDescription\" class=\"control-label col-sm-2\">Description</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"Text\" class=\"form-control\" id=\"categoryDescription\"\r\n                       placeholder=\"a category description\"\r\n                       [(ngModel)]=\"category.categoryDescription\" name=\"categoryDescription\"/>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-sm-offset-2 col-sm-10\">\r\n                <input (click)=\"isAddAction=true\" type=\"submit\" class=\"btn btn-primary\" value=\"Add\"/>\r\n                <input (click)=\"isAddAction=false\" type=\"submit\" class=\"btn btn-secondary\" value=\"Cancel\"/>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='panel panel/primary'>\r\n    <div class='panel-heading'>\r\n        {{tableHeader}}\r\n        <button type=\"button\" [routerLink]=\"['/addCategory']\"\r\n                class=\"btn btn-default\">Add Category</button>\r\n        \r\n    </div>\r\n    <div class='panel-body'>\r\n        <div class='table-responsive'>\r\n            <table class='table'>\r\n                <thead>\r\n                    <tr>\r\n                        <th>Category</th>\r\n                        <th>Last used</th>\r\n                        <th>Link count</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor='let item of categories'>\r\n                        <td>{{ item.categoryName }}</td>\r\n                        <td>{{ item.dateLastUsed }}</td>\r\n                        <td>{{ item.linkCount }}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var categoryDataService_1 = __webpack_require__("../../../../../ClientApp/app/shared/categoryDataService.ts");
var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(data) {
        this.data = data;
        this.tableHeader = 'Clipboard Categories';
        this.categories = [];
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadCategories().
            subscribe(function (result) {
            if (result) {
                _this.categories = _this.data.categories;
            }
            else {
                //TODO: Don't hand out default entries, signal error instead.
                _this.categories = [{
                        categoryName: "Car related",
                        dateLastUsed: "2018-02-15",
                        linkCount: 9
                    }, {
                        categoryName: "Azure",
                        dateLastUsed: "2018-02-15",
                        linkCount: 13
                    }];
            }
        });
    };
    CategoriesComponent = __decorate([
        core_1.Component({
            selector: 'roamclip-categories',
            template: __webpack_require__("../../../../../ClientApp/app/categories/categories.component.html")
        }),
        __metadata("design:paramtypes", [categoryDataService_1.CategoryDataService])
    ], CategoriesComponent);
    return CategoriesComponent;
}());
exports.CategoriesComponent = CategoriesComponent;


/***/ }),

/***/ "../../../../../ClientApp/app/links/links.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='panel panel/primary'>\r\n    <div class='panel-heading'>\r\n        {{tableHeader}}\r\n        <button type=\"button\" \r\n                class=\"btn btn-default\">Add Link</button>\r\n    </div>\r\n    <div class='panel-body'>\r\n        <div class='table-responsive'>\r\n            <table class='table'>\r\n                <thead>\r\n                    <tr>\r\n                        <th>Description</th>\r\n                        <th>Link</th>\r\n                        <th>Category</th>\r\n                        <th>Best before</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor='let item of links'>\r\n                        <td>{{ item.description }}</td>\r\n                        <td><a href=\"{{item.link}}\" target=\"_blank\">{{ item.linkAbbreviated }}</a></td>\r\n                        <td>{{ item.categoryName }}</td>\r\n                        <td>{{ item.bestBefore }}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/links/links.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var linkDataService_1 = __webpack_require__("../../../../../ClientApp/app/shared/linkDataService.ts");
var LinksComponent = /** @class */ (function () {
    function LinksComponent(data) {
        this.data = data;
        this.tableHeader = 'Clipboard Links';
        this.links = [];
    }
    LinksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadLinks().
            subscribe(function (result) {
            if (result) {
                _this.links = _this.data.links;
            }
            else {
                _this.links = [{
                        link: "https://suchen.mobile.de/fahrzeuge/search.html?damageUnrepaired=NO_DAMAGE_UNREPAIRED&isSearchRequest=true&makeModelVariant1.makeId=17200&makeModelVariant1.modelDescription=se&makeModelVariant1.modelId=134&maxFirstRegistrationDate=1980-12-31&maxPowerAsArray=PS&minPowerAsArray=PS&scopeId=C&transmissions=AUTOMATIC_GEAR",
                        description: "Search for classing Mercedes W123 280 SE",
                        categoryName: "Car related",
                        bestBefore: "2018-04-30"
                    }, {
                        link: "https://suchen.mobile.de/fahrzeuge/details.html?id=252201547&damageUnrepaired=NO_DAMAGE_UNREPAIRED&isSearchRequest=true&makeModelVariant1.makeId=17200&makeModelVariant1.modelDescription=se&makeModelVariant1.modelId=134&maxFirstRegistrationDate=1980-12-31&pageNumber=1&scopeId=C&transmissions=AUTOMATIC_GEAR&action=topOfPage&top=3:3&searchId=94d62f01-b49f-344c-6a46-d8126b301948",
                        description: "Classic Red Mercedes 280SE",
                        categoryName: "car related",
                        bestBefore: "2018-04-30"
                    }];
            }
        });
    };
    LinksComponent = __decorate([
        core_1.Component({
            selector: 'roamclip-links',
            template: __webpack_require__("../../../../../ClientApp/app/links/links.component.html")
        }),
        __metadata("design:paramtypes", [linkDataService_1.LinkDataService])
    ], LinksComponent);
    return LinksComponent;
}());
exports.LinksComponent = LinksComponent;


/***/ }),

/***/ "../../../../../ClientApp/app/shared/categoryDataService.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
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


/***/ }),

/***/ "../../../../../ClientApp/app/shared/linkDataService.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var LinkDataService = /** @class */ (function () {
    function LinkDataService(httpClient) {
        this.httpClient = httpClient;
        this.links = [];
    }
    LinkDataService.prototype.loadLinks = function () {
        var _this = this;
        return this.httpClient.get("/api/linksinfo")
            .map(function (data) {
            _this.links = data;
            return true;
        });
    };
    LinkDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], LinkDataService);
    return LinkDataService;
}());
exports.LinkDataService = LinkDataService;


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