(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
/*!****************************************************************!*\
  !*** ./ClientApp/$$_lazy_route_resource lazy namespace object ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/Models/catergory.ts":
/*!***************************************!*\
  !*** ./ClientApp/Models/catergory.ts ***!
  \***************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
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



/***/ }),

/***/ "./ClientApp/Models/link.ts":
/*!**********************************!*\
  !*** ./ClientApp/Models/link.ts ***!
  \**********************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
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



/***/ }),

/***/ "./ClientApp/app/app.component.html":
/*!******************************************!*\
  !*** ./ClientApp/app/app.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n        <a class=\"navbar-brand\" href=\"#\">{{pageTitle}}</a>\r\n        <button class=\"navbar-toggler\"\r\n                type=\"button\"\r\n                data-toggle=\"collapse\"\r\n                data-target=\"#navbarSupportedContent\"\r\n                aria-controls=\"navbarSupportedContent\"\r\n                aria-expanded=\"false\"\r\n                aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\" [routerLink]=\"'/links'\">Links<span class=\"sr-only\">(current)</span></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [routerLink]=\"'/categories'\">Categories</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"{{isButtonEnabled}}\" \r\n                       (click)=\"onCreateDemoDataClick()\">{{buttonContent}}</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n    <div class='container-fluid'>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/*!****************************************!*\
  !*** ./ClientApp/app/app.component.ts ***!
  \****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _shared_categoryDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/categoryDataService */ "./ClientApp/app/shared/categoryDataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'roamclip-root',
            template: __webpack_require__(/*! ./app.component.html */ "./ClientApp/app/app.component.html"),
            styles: ["\nthead {\n    color: #202020;\n}"]
        }),
        __metadata("design:paramtypes", [_shared_categoryDataService__WEBPACK_IMPORTED_MODULE_1__["CategoryDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/*!*************************************!*\
  !*** ./ClientApp/app/app.module.ts ***!
  \*************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./ClientApp/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categories/categories.component */ "./ClientApp/app/categories/categories.component.ts");
/* harmony import */ var _categories_addCategory_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./categories/addCategory.component */ "./ClientApp/app/categories/addCategory.component.ts");
/* harmony import */ var _links_links_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./links/links.component */ "./ClientApp/app/links/links.component.ts");
/* harmony import */ var _shared_categoryDataService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/categoryDataService */ "./ClientApp/app/shared/categoryDataService.ts");
/* harmony import */ var _shared_linkDataService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/linkDataService */ "./ClientApp/app/shared/linkDataService.ts");
/* harmony import */ var _links_addLink_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./links/addLink.component */ "./ClientApp/app/links/addLink.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: 'categories', component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__["CategoriesComponent"] },
    { path: 'addCategory', component: _categories_addCategory_component__WEBPACK_IMPORTED_MODULE_8__["AddCategoryComponent"] },
    { path: 'links', component: _links_links_component__WEBPACK_IMPORTED_MODULE_9__["LinksComponent"] },
    { path: 'addLink', component: _links_addLink_component__WEBPACK_IMPORTED_MODULE_12__["AddLinkComponent"] },
    { path: '', redirectTo: 'links', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__["CategoriesComponent"],
                _categories_addCategory_component__WEBPACK_IMPORTED_MODULE_8__["AddCategoryComponent"],
                _links_links_component__WEBPACK_IMPORTED_MODULE_9__["LinksComponent"],
                _links_addLink_component__WEBPACK_IMPORTED_MODULE_12__["AddLinkComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes, { enableTracing: true }),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["AlertModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [
                _shared_categoryDataService__WEBPACK_IMPORTED_MODULE_10__["CategoryDataService"],
                _shared_linkDataService__WEBPACK_IMPORTED_MODULE_11__["LinkDataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./ClientApp/app/categories/addCategory.component.ts":
/*!***********************************************************!*\
  !*** ./ClientApp/app/categories/addCategory.component.ts ***!
  \***********************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _shared_categoryDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/categoryDataService */ "./ClientApp/app/shared/categoryDataService.ts");
/* harmony import */ var _Models_catergory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Models/catergory */ "./ClientApp/Models/catergory.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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




var AddCategoryComponent = /** @class */ (function () {
    function AddCategoryComponent(data, router) {
        this.data = data;
        this.router = router;
        this.pageTitle = 'Add new category';
        // If you don't want to have to specify all of the properties as part of the constructor
        // you can make them optional in the model using "?"
        this.category = new _Models_catergory__WEBPACK_IMPORTED_MODULE_2__["Category"]("", "Test-Category", "Test description", null, new Date(), new Date(), new Date());
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'roamclip-addCategory',
            template: __webpack_require__(/*! ./addcategory.component.html */ "./ClientApp/app/categories/addcategory.component.html")
        }),
        __metadata("design:paramtypes", [_shared_categoryDataService__WEBPACK_IMPORTED_MODULE_1__["CategoryDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddCategoryComponent);
    return AddCategoryComponent;
}());



/***/ }),

/***/ "./ClientApp/app/categories/addcategory.component.html":
/*!*************************************************************!*\
  !*** ./ClientApp/app/categories/addcategory.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <br />\r\n    <h2>{{pageTitle}}</h2>\r\n    <br />\r\n\r\n    <form class=\"form-horizontal\" #addCategory=\"ngForm\" (ngSubmit)=\"onSubmit(addCategory.value)\">\r\n        <div class=\"form-group\">\r\n            <label for=\"categoryName\" class=\"control-label col-sm-2\">Category</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"Text\" class=\"form-control\" id=\"categoryName\"\r\n                       placeholder=\"a new category name\"\r\n                       [(ngModel)]=\"category.categoryName\" name=\"categoryName\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"categoryDescription\" class=\"control-label col-sm-2\">Description</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"Text\" class=\"form-control\" id=\"categoryDescription\"\r\n                       placeholder=\"a category description\"\r\n                       [(ngModel)]=\"category.categoryDescription\" name=\"categoryDescription\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"col-sm-offset-2 col-sm-10\">\r\n                <button type=\"submit\"\r\n                        class=\"btn btn-primary\">\r\n                    Add\r\n                </button>\r\n                <button class=\"btn btn-secondary\"\r\n                        [routerLink]=\"['/categories']\">\r\n                    Cancel\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/categories/categories.component.html":
/*!************************************************************!*\
  !*** ./ClientApp/app/categories/categories.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='panel panel/primary'>\r\n    <div class='panel-heading'>\r\n        {{tableHeader}}\r\n        <button type=\"button\" [routerLink]=\"['/addCategory']\"\r\n                class=\"btn btn-default\">Add Category</button>\r\n        \r\n    </div>\r\n    <div class='panel-body'>\r\n        <div class='table-responsive'>\r\n            <table class='table'>\r\n                <thead>\r\n                    <tr>\r\n                        <th>Category</th>\r\n                        <th>Description</th>\r\n                        <th>Last assigned to</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor='let item of categories'>\r\n                        <td>{{ item.categoryName }}</td>\r\n                        <td>{{ item.categoryDescription }}</td>\r\n                        <td>{{ item.dateLastAssignedTo | date: 'yyyy-MM-dd (EEE)' }}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/categories/categories.component.ts":
/*!**********************************************************!*\
  !*** ./ClientApp/app/categories/categories.component.ts ***!
  \**********************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _shared_categoryDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/categoryDataService */ "./ClientApp/app/shared/categoryDataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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


var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(categoryDs) {
        this.categoryDs = categoryDs;
        // HINT: It's usual that properties come first, before the constructor.
        // And no need for "public": Properties are public by default.
        this.tableHeader = 'Clipboard Categories';
        this.categories = [];
    }
    // I added the code for the Observable. You can comment this out to use the async technique instead.
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.getCategories().catch(() => { });
        this.categoryDs.loadCategories().subscribe(function (categories) { return _this.categories = categories; }, function (error) { return _this.errorMessage = error; });
    };
    ;
    CategoriesComponent.prototype.getCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.categoryDs.loadCategoriesAsync()];
                    case 1:
                        _a.categories = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'roamclip-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./ClientApp/app/categories/categories.component.html")
        }),
        __metadata("design:paramtypes", [_shared_categoryDataService__WEBPACK_IMPORTED_MODULE_1__["CategoryDataService"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./ClientApp/app/links/addLink.component.html":
/*!****************************************************!*\
  !*** ./ClientApp/app/links/addLink.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <br />\r\n    <h2>{{pageTitle}}</h2>\r\n    <br />\r\n\r\n    <form class=\"form\" #addLink=\"ngForm\" (ngSubmit)=\"onSubmit(addLink.value)\">\r\n        <div class=\"forms-group\">\r\n                <label for=\"urlString\" class=\"control-label\">Link (Url)</label>\r\n                <div class=\"col-md-8\">\r\n                    <input type=\"Text\" class=\"form-control\" id=\"urlString\"\r\n                           placeholder=\"paste in a link (url)\"\r\n                           [(ngModel)]=\"link.urlString\" name=\"urlString\">\r\n                </div>\r\n        </div>\r\n\r\n        <div class=\"forms-group\">\r\n            <label for=\"category\" class=\"control-label\">Category</label>\r\n            <div class=\"col-md-8\">\r\n                <select class=\"custom-select col-md-8\" \r\n                        [(ngModel)]=\"selectedCategory.idCategory\"\r\n                        id=\"category\" name=\"selectedCategory\">\r\n                    <option selected>Choose category</option>\r\n                    <option *ngFor='let catItem of categories'\r\n                            value=\"{{catItem.idCategory}}\">\r\n                        {{catItem.categoryName}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"forms-group\">\r\n            <label for=\"description\" class=\"control-label\">Description</label>\r\n            <div class=\"col-md-8\">\r\n                <input type=\"Text\" class=\"form-control\" id=\"description\"\r\n                       placeholder=\"a category description\"\r\n                       [(ngModel)]=\"link.description\" name=\"description\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"forms-group\">\r\n            <label for=\"bestBefore\" class=\"control-label\">Best Before</label>\r\n            <div class=\"col-md-8\">\r\n                <input type=\"date\" class=\"form-control\" id=\"bestBefore\"\r\n                       placeholder=\"keep the link until...\"\r\n                       [(ngModel)]=\"link.bestBeforeDate\" name=\"bestBefore\" />\r\n            </div>\r\n        </div>\r\n\r\n        <br />\r\n\r\n        <div class=\"forms-group\">\r\n            <button type=\"submit\"\r\n                    class=\"btn btn-primary\">\r\n                Add\r\n            </button>\r\n            <button class=\"btn btn-secondary\"\r\n                    [routerLink]=\"['/links']\">\r\n                Cancel\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/links/addLink.component.ts":
/*!**************************************************!*\
  !*** ./ClientApp/app/links/addLink.component.ts ***!
  \**************************************************/
/*! exports provided: AddLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLinkComponent", function() { return AddLinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _shared_linkDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/linkDataService */ "./ClientApp/app/shared/linkDataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _Models_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Models/link */ "./ClientApp/Models/link.ts");
/* harmony import */ var _shared_categoryDataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/categoryDataService */ "./ClientApp/app/shared/categoryDataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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





var AddLinkComponent = /** @class */ (function () {
    function AddLinkComponent(linkDs, categoryDs, router) {
        this.linkDs = linkDs;
        this.categoryDs = categoryDs;
        this.router = router;
        this.pageTitle = 'Add new link';
        // If you don't want to have to specify all of the properties as part of the constructor
        // you can make them optional in the model using "?"
        this.link = new _Models_link__WEBPACK_IMPORTED_MODULE_3__["Link"]("", null, null, "Url", "", "Description", new Date(), new Date());
        // I don't normally see a Cancel button defined with type=submit.
        // Rather, the cancel is set to type=button and it uses a routerLink to navigate back.
        this.isAddAction = false;
    }
    AddLinkComponent.prototype.onSubmit = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var t;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('you submitted value:', form);
                        console.log('isAddAction is', this.isAddAction);
                        console.log('link: Url', this.link.urlString);
                        console.log('link: Description', this.link.description);
                        this.link.category = this.selectedCategory;
                        return [4 /*yield*/, this.linkDs.postLink(this.link)];
                    case 1:
                        t = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddLinkComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.categoryDs.loadCategoriesAsync()];
                    case 1:
                        _a.categories = _b.sent();
                        if (this.categories.length > 0) {
                            this.selectedCategory = this.categories[0];
                        }
                        return [2 /*return*/];
                }
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'roamclip-addCategory',
            template: __webpack_require__(/*! ./addLink.component.html */ "./ClientApp/app/links/addLink.component.html")
        }),
        __metadata("design:paramtypes", [_shared_linkDataService__WEBPACK_IMPORTED_MODULE_1__["LinkDataService"],
            _shared_categoryDataService__WEBPACK_IMPORTED_MODULE_4__["CategoryDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddLinkComponent);
    return AddLinkComponent;
}());



/***/ }),

/***/ "./ClientApp/app/links/links.component.html":
/*!**************************************************!*\
  !*** ./ClientApp/app/links/links.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='panel panel/primary'>\r\n    <div class='panel-heading'>\r\n        {{tableHeader}}\r\n        <button type=\"button\" [routerLink]=\"['/addLink']\"\r\n                class=\"btn btn-default\">Add Link</button>\r\n    </div>\r\n    <div class='panel-body'>\r\n        <div class='table-responsive'>\r\n            <table class='table'>\r\n                <thead>\r\n                    <tr>\r\n                        <th>Description</th>\r\n                        <th>Link</th>\r\n                        <th>Category</th>\r\n                        <th>Best before</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor='let item of links'>\r\n                        <td>{{ item.description }}</td>\r\n                        <td><a href=\"{{item.urlString}}\" target=\"_blank\">{{ item.urlStringAbbreviated }}</a></td>\r\n                        <td>{{ item.category.categoryName }}</td>\r\n                        <td>{{ item.bestBefore | date: 'yyyy-MM-dd' }}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/links/links.component.ts":
/*!************************************************!*\
  !*** ./ClientApp/app/links/links.component.ts ***!
  \************************************************/
/*! exports provided: LinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksComponent", function() { return LinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _shared_linkDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/linkDataService */ "./ClientApp/app/shared/linkDataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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


var LinksComponent = /** @class */ (function () {
    function LinksComponent(linkDs) {
        this.linkDs = linkDs;
        this.tableHeader = 'Clipboard Links';
    }
    LinksComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.linkDs.loadLinksAsync()];
                    case 1:
                        _a.links = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _b.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LinksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'roamclip-links',
            template: __webpack_require__(/*! ./links.component.html */ "./ClientApp/app/links/links.component.html")
        }),
        __metadata("design:paramtypes", [_shared_linkDataService__WEBPACK_IMPORTED_MODULE_1__["LinkDataService"]])
    ], LinksComponent);
    return LinksComponent;
}());



/***/ }),

/***/ "./ClientApp/app/shared/categoryDataService.ts":
/*!*****************************************************!*\
  !*** ./ClientApp/app/shared/categoryDataService.ts ***!
  \*****************************************************/
/*! exports provided: CategoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDataService", function() { return CategoryDataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_observable_ErrorObservable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/ErrorObservable */ "./node_modules/rxjs/_esm5/observable/ErrorObservable.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var CategoryDataService = /** @class */ (function () {
    function CategoryDataService(httpClient) {
        this.httpClient = httpClient;
    }
    // typical Angular way to get data from a WebApi
    CategoryDataService.prototype.loadCategories = function () {
        return this.httpClient.get("/api/categories")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (c) { return console.log(JSON.stringify(c)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // error handler for catchError (see above)
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
        return new rxjs_observable_ErrorObservable__WEBPACK_IMPORTED_MODULE_2__["ErrorObservable"](errorMessage);
    };
    // the more .NET style async way - but equally OK!
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
                        if (e_1 instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                            err = e_1;
                            console.log("Error getting categories: ", err.message);
                        }
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // adding a new category:
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
                        if (e_2 instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
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
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.httpClient.post('/api/categories', category, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log('createCategory: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
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
                        if (e_3 instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                            err = e_3;
                            console.log("Error requesting to generate demodata.", err.message);
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CategoryDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], CategoryDataService);
    return CategoryDataService;
}());



/***/ }),

/***/ "./ClientApp/app/shared/linkDataService.ts":
/*!*************************************************!*\
  !*** ./ClientApp/app/shared/linkDataService.ts ***!
  \*************************************************/
/*! exports provided: LinkDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkDataService", function() { return LinkDataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_observable_ErrorObservable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/ErrorObservable */ "./node_modules/rxjs/_esm5/observable/ErrorObservable.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var LinkDataService = /** @class */ (function () {
    function LinkDataService(httpClient) {
        this.httpClient = httpClient;
    }
    // typical Angular way to get data from a WebApi
    LinkDataService.prototype.loadLinks = function () {
        return this.httpClient.get("/api/links")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // error handler for catchError (see above)
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
        return new rxjs_observable_ErrorObservable__WEBPACK_IMPORTED_MODULE_2__["ErrorObservable"](errorMessage);
    };
    // the more .NET style async way - but equally OK!
    LinkDataService.prototype.loadLinksAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var t, e_1, err;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("BEFORE getting categories.");
                        return [4 /*yield*/, this.httpClient.get("/api/links").toPromise()];
                    case 1:
                        t = _a.sent();
                        console.log("No error occured getting categories.");
                        return [2 /*return*/, t];
                    case 2:
                        e_1 = _a.sent();
                        if (e_1 instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                            err = e_1;
                            console.log("Error getting categories: ", err.message);
                        }
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // adding a new link:
    LinkDataService.prototype.postLink = function (link) {
        return __awaiter(this, void 0, void 0, function () {
            var newGuid, e_2, err;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("BEFORE putting link:", link.urlString);
                        return [4 /*yield*/, this.httpClient.post("/api/links", link, httpOptions).toPromise()];
                    case 1:
                        newGuid = _a.sent();
                        console.log("No error occured putting link. GUID ID is:", newGuid);
                        return [2 /*return*/, newGuid];
                    case 2:
                        e_2 = _a.sent();
                        if (e_2 instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                            err = e_2;
                            console.log("Error putting link: ", err.message);
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LinkDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], LinkDataService);
    return LinkDataService;
}());



/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/*!***********************************************!*\
  !*** ./ClientApp/environments/environment.ts ***!
  \***********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./ClientApp/main.ts":
/*!***************************!*\
  !*** ./ClientApp/main.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./ClientApp/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./ClientApp/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./ClientApp/main.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\ghdev\VBAngular\src\RoamingClipBoardApi\ClientApp\main.ts */"./ClientApp/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map