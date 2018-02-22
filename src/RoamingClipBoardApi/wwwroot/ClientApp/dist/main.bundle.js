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
    // If desired, you can make some of these optional by adding "?" such as links?: Link[]
    // But note that the optional properties must be at the end.
    function Category(idCategory, categoryName, categoryDescription, links, dateLastAssignedTo, dateCreated, dateLastEdited) {
        this.idCategory = idCategory;
        this.categoryName = categoryName;
        this.categoryDescription = categoryDescription;
        this.links = links;
        this.dateLastAssignedTo = dateLastAssignedTo;
        this.dateCreated = dateCreated;
        this.dateLastEdited = dateLastEdited;
    }
    return Category;
}());
exports.Category = Category;


/***/ }),

/***/ "../../../../../ClientApp/Models/link.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Link = /** @class */ (function () {
    function Link(idLink, category, bestBefore, urlString, urlStringAbbreviated, description, dateCreated, dateLastEdited) {
        this.idLink = idLink;
        this.category = category;
        this.bestBefore = bestBefore;
        this.urlString = urlString;
        this.urlStringAbbreviated = urlStringAbbreviated;
        this.description = description;
        this.dateCreated = dateCreated;
        this.dateLastEdited = dateLastEdited;
    }
    return Link;
}());
exports.Link = Link;


/***/ }),

/***/ "../../../../../ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n        <a class=\"navbar-brand\" href=\"#\">{{pageTitle}}</a>\r\n        <button class=\"navbar-toggler\"\r\n                type=\"button\"\r\n                data-toggle=\"collapse\"\r\n                data-target=\"#navbarSupportedContent\"\r\n                aria-controls=\"navbarSupportedContent\"\r\n                aria-expanded=\"false\"\r\n                aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\" [routerLink]=\"'/links'\">Links<span class=\"sr-only\">(current)</span></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [routerLink]=\"'/categories'\">Categories</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"{{isButtonEnabled}}\" \r\n                       (click)=\"onCreateDemoDataClick()\">{{buttonContent}}</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n    <div class='container-fluid'>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n"

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var categoryDataService_1 = __webpack_require__("../../../../../ClientApp/app/shared/categoryDataService.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(data, router) {
        this.data = data;
        this.router = router;
        this.pageTitle = 'The Roaming Clipboard';
        this.buttonContent = 'Create Demo Data';
        this.isButtonEnabled = 'btn btn-primary active';
    }
    AppComponent.prototype.onCreateDemoDataClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Create Demo Data.");
                        return [4 /*yield*/, this.data.createDemoData()];
                    case 1:
                        _a.sent();
                        this.buttonContent = 'Demo-Data created.';
                        this.isButtonEnabled = 'btn btn-primary disabled';
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'roamclip-root',
            template: __webpack_require__("../../../../../ClientApp/app/app.component.html"),
            styles: ["\nthead {\n    color: #202020;\n}"]
        }),
        __metadata("design:paramtypes", [categoryDataService_1.CategoryDataService,
            router_1.Router])
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
var addLink_component_1 = __webpack_require__("../../../../../ClientApp/app/links/addLink.component.ts");
var appRoutes = [
    { path: 'categories', component: categories_component_1.CategoriesComponent },
    { path: 'addCategory', component: addCategory_component_1.AddCategoryComponent },
    { path: 'links', component: links_component_1.LinksComponent },
    { path: 'addLink', component: addLink_component_1.AddLinkComponent },
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
                links_component_1.LinksComponent,
                addLink_component_1.AddLinkComponent
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var categoryDataService_1 = __webpack_require__("../../../../../ClientApp/app/shared/categoryDataService.ts");
var catergory_1 = __webpack_require__("../../../../../ClientApp/Models/catergory.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AddCategoryComponent = /** @class */ (function () {
    function AddCategoryComponent(data, router) {
        this.data = data;
        this.router = router;
        this.pageTitle = 'Add new category';
        // If you don't want to have to specify all of the properties as part of the constructor
        // you can make them optional in the model using "?"
        this.category = new catergory_1.Category("", "Test-Category", "Test description", null, new Date(), new Date(), new Date());
        // I don't normally see a Cancel button defined with type=submit.
        // Rather, the cancel is set to type=button and it uses a routerLink to navigate back.
        this.isAddAction = false;
    }
    AddCategoryComponent.prototype.onSubmit = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var t;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('you submitted value:', form);
                        console.log('isAddAction is', this.isAddAction);
                        console.log('category: Name', this.category.categoryName);
                        console.log('category: Description', this.category.categoryDescription);
                        return [4 /*yield*/, this.data.postCategory(this.category)];
                    case 1:
                        t = _a.sent();
                        console.log('putCategory', t);
                        this.router.navigate(['/categories']);
                        return [2 /*return*/];
                }
            });
        });
    };
    // Performing the save using Observables
    AddCategoryComponent.prototype.saveCategory = function () {
        var _this = this;
        this.data.saveCategory(this.category).subscribe(function () { return _this.router.navigate(['/categories']); });
    };
    AddCategoryComponent = __decorate([
        core_1.Component({
            selector: 'roamclip-addCategory',
            template: __webpack_require__("../../../../../ClientApp/app/categories/addcategory.component.html")
        }),
        __metadata("design:paramtypes", [categoryDataService_1.CategoryDataService,
            router_1.Router])
    ], AddCategoryComponent);
    return AddCategoryComponent;
}());
exports.AddCategoryComponent = AddCategoryComponent;


/***/ }),

/***/ "../../../../../ClientApp/app/categories/addcategory.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <br />\r\n    <h2>{{pageTitle}}</h2>\r\n    <br />\r\n\r\n    <form class=\"form-horizontal\" #addCategory=\"ngForm\" (ngSubmit)=\"onSubmit(addCategory.value)\">\r\n        <div class=\"form-group\">\r\n            <label for=\"categoryName\" class=\"control-label col-sm-2\">Category</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"Text\" class=\"form-control\" id=\"categoryName\"\r\n                       placeholder=\"a new category name\"\r\n                       [(ngModel)]=\"category.categoryName\" name=\"categoryName\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"categoryDescription\" class=\"control-label col-sm-2\">Description</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"Text\" class=\"form-control\" id=\"categoryDescription\"\r\n                       placeholder=\"a category description\"\r\n                       [(ngModel)]=\"category.categoryDescription\" name=\"categoryDescription\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"col-sm-offset-2 col-sm-10\">\r\n                <button type=\"submit\"\r\n                        class=\"btn btn-primary\">\r\n                    Add\r\n                </button>\r\n                <button class=\"btn btn-secondary\"\r\n                        [routerLink]=\"['/categories']\">\r\n                    Cancel\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../ClientApp/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='panel panel/primary'>\r\n    <div class='panel-heading'>\r\n        {{tableHeader}}\r\n        <button type=\"button\" [routerLink]=\"['/addCategory']\"\r\n                class=\"btn btn-default\">Add Category</button>\r\n        \r\n    </div>\r\n    <div class='panel-body'>\r\n        <div class='table-responsive'>\r\n            <table class='table'>\r\n                <thead>\r\n                    <tr>\r\n                        <th>Category</th>\r\n                        <th>Description</th>\r\n                        <th>Last assigned to</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor='let item of categories'>\r\n                        <td>{{ item.categoryName }}</td>\r\n                        <td>{{ item.categoryDescription }}</td>\r\n                        <td>{{ item.dateLastAssignedTo | date: 'yyyy-MM-dd (EEE)' }}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var categoryDataService_1 = __webpack_require__("../../../../../ClientApp/app/shared/categoryDataService.ts");
var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(data) {
        this.data = data;
        // Normally the properties are first, before the constructor
        // No need for "public". Properties are public by default.
        this.tableHeader = 'Clipboard Categories';
        this.categories = [];
    }
    // I added the code for the Observable. You can comment this out to use the async technique instead.
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.getCategories().catch(() => { });
        this.data.loadCategories().subscribe(function (categories) { return _this.categories = categories; }, function (error) { return _this.errorMessage = error; });
    };
    ;
    CategoriesComponent.prototype.getCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.data.loadCategoriesAsync()];
                    case 1:
                        _a.categories = _b.sent();
                        return [2 /*return*/];
                }
            });
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

/***/ "../../../../../ClientApp/app/links/addLink.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <br />\r\n    <h2>{{pageTitle}}</h2>\r\n    <br />\r\n\r\n    <form class=\"form-horizontal\" #addCategory=\"ngForm\" (ngSubmit)=\"onSubmit(addCategory.value)\">\r\n        <div class=\"form-group\">\r\n            <label for=\"urlString\" class=\"control-label col-sm-2\">Link (Url)</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"Text\" class=\"form-control\" id=\"urlString\"\r\n                       placeholder=\"paste in a link (url)\"\r\n                       [(ngModel)]=\"link.urlString\" name=\"urlString\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"dropdown\">\r\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\"\r\n                        id=\"categories\" data-toggle=\"dropdown\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    Categories\r\n                </button>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                    <a class=\"dropdown-item\">Action</a>\r\n                    <a class=\"dropdown-item\">Another action</a>\r\n                    <a class=\"dropdown-item\">Something else here</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"description\" class=\"control-label col-sm-2\">Description</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"Text\" class=\"form-control\" id=\"description\"\r\n                       placeholder=\"a category description\"\r\n                       [(ngModel)]=\"link.description\" name=\"description\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"col-sm-offset-2 col-sm-10\">\r\n                <button type=\"submit\"\r\n                        class=\"btn btn-primary\">\r\n                    Add\r\n                </button>\r\n                <button class=\"btn btn-secondary\"\r\n                        [routerLink]=\"['/links']\">\r\n                    Cancel\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/links/addLink.component.ts":
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var linkDataService_1 = __webpack_require__("../../../../../ClientApp/app/shared/linkDataService.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var link_1 = __webpack_require__("../../../../../ClientApp/Models/link.ts");
var AddLinkComponent = /** @class */ (function () {
    function AddLinkComponent(data, router) {
        this.data = data;
        this.router = router;
        this.pageTitle = 'Add new link';
        // If you don't want to have to specify all of the properties as part of the constructor
        // you can make them optional in the model using "?"
        this.link = new link_1.Link("", null, null, "Url", "", "Description", new Date(), new Date());
        // I don't normally see a Cancel button defined with type=submit.
        // Rather, the cancel is set to type=button and it uses a routerLink to navigate back.
        this.isAddAction = false;
    }
    AddLinkComponent.prototype.onSubmit = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('you submitted value:', form);
                console.log('isAddAction is', this.isAddAction);
                console.log('link: Url', this.link.urlString);
                console.log('link: Description', this.link.description);
                // var t = await this.data.postCategory(this.category);
                //console.log('putCategory', t);
                this.router.navigate(['/categories']);
                return [2 /*return*/];
            });
        });
    };
    // Performing the save using Observables
    AddLinkComponent.prototype.saveCategory = function () {
        // this.data.saveCategory(this.category).subscribe(
        // () => this.router.navigate(['/categories'])
        //);
    };
    AddLinkComponent = __decorate([
        core_1.Component({
            selector: 'roamclip-addCategory',
            template: __webpack_require__("../../../../../ClientApp/app/links/addLink.component.html")
        }),
        __metadata("design:paramtypes", [linkDataService_1.LinkDataService,
            router_1.Router])
    ], AddLinkComponent);
    return AddLinkComponent;
}());
exports.AddLinkComponent = AddLinkComponent;


/***/ }),

/***/ "../../../../../ClientApp/app/links/links.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='panel panel/primary'>\r\n    <div class='panel-heading'>\r\n        {{tableHeader}}\r\n        <button type=\"button\" [routerLink]=\"['/addLink']\"\r\n                class=\"btn btn-default\">Add Link</button>\r\n    </div>\r\n    <div class='panel-body'>\r\n        <div class='table-responsive'>\r\n            <table class='table'>\r\n                <thead>\r\n                    <tr>\r\n                        <th>Description</th>\r\n                        <th>Link</th>\r\n                        <th>Category</th>\r\n                        <th>Best before</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor='let item of links'>\r\n                        <td>{{ item.description }}</td>\r\n                        <td><a href=\"{{item.urlString}}\" target=\"_blank\">{{ item.urlStringAbbreviated }}</a></td>\r\n                        <td>{{ item.category.categoryName }}</td>\r\n                        <td>{{ item.bestBefore | date: 'yyyy-MM-dd' }}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

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
    }
    LinksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadLinks().
            subscribe(function (result) {
            if (result) {
                _this.links = result;
            }
            else {
                //this.links = [{
                //    link: "https://suchen.mobile.de/fahrzeuge/search.html?damageUnrepaired=NO_DAMAGE_UNREPAIRED&isSearchRequest=true&makeModelVariant1.makeId=17200&makeModelVariant1.modelDescription=se&makeModelVariant1.modelId=134&maxFirstRegistrationDate=1980-12-31&maxPowerAsArray=PS&minPowerAsArray=PS&scopeId=C&transmissions=AUTOMATIC_GEAR",
                //    description: "Search for classing Mercedes W123 280 SE",
                //    categoryName: "Car related",
                //    bestBefore: "2018-04-30"
                //}, 
                //{
                //    link: "https://suchen.mobile.de/fahrzeuge/details.html?id=252201547&damageUnrepaired=NO_DAMAGE_UNREPAIRED&isSearchRequest=true&makeModelVariant1.makeId=17200&makeModelVariant1.modelDescription=se&makeModelVariant1.modelId=134&maxFirstRegistrationDate=1980-12-31&pageNumber=1&scopeId=C&transmissions=AUTOMATIC_GEAR&action=topOfPage&top=3:3&searchId=94d62f01-b49f-344c-6a46-d8126b301948",
                //    description: "Classic Red Mercedes 280SE",
                //    categoryName: "car related",
                //    bestBefore: "2018-04-30"
                //}]
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ErrorObservable_1 = __webpack_require__("../../../../rxjs/_esm5/observable/ErrorObservable.js");
var operators_1 = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var httpOptions = {
    headers: new http_1.HttpHeaders({
        'Content-Type': 'application/json'
    })
};
var CategoryDataService = /** @class */ (function () {
    function CategoryDataService(httpClient) {
        this.httpClient = httpClient;
    }
    CategoryDataService.prototype.loadCategories = function () {
        return this.httpClient.get("/api/categories")
            .pipe(operators_1.tap(function (c) { return console.log(JSON.stringify(c)); }), operators_1.catchError(this.handleError));
    };
    CategoryDataService.prototype.loadCategoriesAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var t, e_1, err;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("BEFORE getting categories.");
                        return [4 /*yield*/, this.httpClient.get("/api/categories").toPromise()];
                    case 1:
                        t = _a.sent();
                        console.log("No error occured getting categories.");
                        return [2 /*return*/, t];
                    case 2:
                        e_1 = _a.sent();
                        if (e_1 instanceof http_1.HttpErrorResponse) {
                            err = e_1;
                            console.log("Error getting categories: ", err.message);
                        }
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CategoryDataService.prototype.postCategory = function (category) {
        return __awaiter(this, void 0, void 0, function () {
            var newGuid, e_2, err;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("BEFORE putting category:", category.categoryName);
                        return [4 /*yield*/, this.httpClient.post("/api/categories", category, httpOptions).toPromise()];
                    case 1:
                        newGuid = _a.sent();
                        console.log("No error occured putting category. GUID ID is:", newGuid);
                        return [2 /*return*/, newGuid];
                    case 2:
                        e_2 = _a.sent();
                        if (e_2 instanceof http_1.HttpErrorResponse) {
                            err = e_2;
                            console.log("Error putting category: ", err.message);
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Added an example save using Observables.
    CategoryDataService.prototype.saveCategory = function (category) {
        var headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.httpClient.post('/api/categories', category, { headers: headers })
            .pipe(operators_1.tap(function (data) { return console.log('createCategory: ' + JSON.stringify(data)); }), operators_1.catchError(this.handleError));
    };
    //TODO: This has to go in a dedicated DataService.
    CategoryDataService.prototype.createDemoData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_3, err;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("BEFORE creating demo data.");
                        return [4 /*yield*/, this.httpClient.get("/api/sampledata").toPromise()];
                    case 1:
                        result = _a.sent();
                        console.log("No error requesting to generate demodata.", result);
                        return [2 /*return*/, result];
                    case 2:
                        e_3 = _a.sent();
                        if (e_3 instanceof http_1.HttpErrorResponse) {
                            err = e_3;
                            console.log("Error requesting to generate demodata.", err.message);
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CategoryDataService.prototype.handleError = function (err) {
        console.log(err);
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage;
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Backend returned code " + err.status + ", body was: " + err.error;
        }
        console.error(errorMessage);
        return new ErrorObservable_1.ErrorObservable(errorMessage);
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
var ErrorObservable_1 = __webpack_require__("../../../../rxjs/_esm5/observable/ErrorObservable.js");
var operators_1 = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var LinkDataService = /** @class */ (function () {
    function LinkDataService(httpClient) {
        this.httpClient = httpClient;
    }
    LinkDataService.prototype.loadLinks = function () {
        return this.httpClient.get("/api/links")
            .pipe(operators_1.catchError(this.handleError));
    };
    LinkDataService.prototype.handleError = function (err) {
        console.log(err);
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage;
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Backend returned code " + err.status + ", body was: " + err.error;
        }
        console.error(errorMessage);
        return new ErrorObservable_1.ErrorObservable(errorMessage);
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