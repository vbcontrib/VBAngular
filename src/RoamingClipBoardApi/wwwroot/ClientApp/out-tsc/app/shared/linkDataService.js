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
var ErrorObservable_1 = require("rxjs/observable/ErrorObservable");
var operators_1 = require("rxjs/operators");
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
//# sourceMappingURL=linkDataService.js.map