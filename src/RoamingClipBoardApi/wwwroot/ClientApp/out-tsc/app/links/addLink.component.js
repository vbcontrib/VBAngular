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
var core_1 = require("@angular/core");
var linkDataService_1 = require("../shared/linkDataService");
var router_1 = require("@angular/router");
var link_1 = require("../../Models/link");
var categoryDataService_1 = require("../shared/categoryDataService");
var AddLinkComponent = /** @class */ (function () {
    function AddLinkComponent(linkDs, categoryDs, router) {
        this.linkDs = linkDs;
        this.categoryDs = categoryDs;
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
        core_1.Component({
            selector: 'roamclip-addCategory',
            templateUrl: './addLink.component.html'
        }),
        __metadata("design:paramtypes", [linkDataService_1.LinkDataService,
            categoryDataService_1.CategoryDataService,
            router_1.Router])
    ], AddLinkComponent);
    return AddLinkComponent;
}());
exports.AddLinkComponent = AddLinkComponent;
//# sourceMappingURL=addLink.component.js.map