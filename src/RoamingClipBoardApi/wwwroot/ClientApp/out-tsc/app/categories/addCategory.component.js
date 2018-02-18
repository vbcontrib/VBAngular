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
var core_1 = require("@angular/core");
var categoryDataService_1 = require("../shared/categoryDataService");
var catergory_1 = require("../../Models/catergory");
var router_1 = require("@angular/router");
var AddCategoryComponent = /** @class */ (function () {
    function AddCategoryComponent(data, router) {
        this.data = data;
        this.router = router;
        this.pageTitle = 'Add new category';
        this.category = new catergory_1.Category("", "", null, "", new Date(), new Date(), new Date());
        this.isAddAction = false;
    }
    AddCategoryComponent.prototype.onSubmit = function (form) {
        console.log('you submitted value:', form);
        console.log('isAddAction is', this.isAddAction);
        this.router.navigate(['/categories']);
    };
    AddCategoryComponent = __decorate([
        core_1.Component({
            selector: 'roamclip-addCategory',
            templateUrl: './addcategory.component.html'
        }),
        __metadata("design:paramtypes", [categoryDataService_1.CategoryDataService,
            router_1.Router])
    ], AddCategoryComponent);
    return AddCategoryComponent;
}());
exports.AddCategoryComponent = AddCategoryComponent;
//# sourceMappingURL=addCategory.component.js.map