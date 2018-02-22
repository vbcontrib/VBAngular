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
var linkDataService_1 = require("../shared/linkDataService");
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
            templateUrl: './links.component.html'
        }),
        __metadata("design:paramtypes", [linkDataService_1.LinkDataService])
    ], LinksComponent);
    return LinksComponent;
}());
exports.LinksComponent = LinksComponent;
//# sourceMappingURL=links.component.js.map