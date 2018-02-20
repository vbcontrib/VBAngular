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
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var ErrorObservable_1 = require("rxjs/observable/ErrorObservable");
var httpOptions = {
    headers: new http_1.HttpHeaders({
        'Content-Type': 'application/json'
    })
};
var CategoryDataService = /** @class */ (function () {
    function CategoryDataService(httpClient) {
        this.httpClient = httpClient;
    }
    CategoryDataService.prototype.handleError = function (error) {
        return new ErrorObservable_1.ErrorObservable("");
    };
    //loadCategoriesClassic() {
    //    var ret = this.httpClient.get<Category[]>("/api/categories")
    //        .pipe(
    //        catchError(this.handleError)
    //        );
    //    if (err.error instanceof Error) {
    //        console.log("Client-side error occured.");
    //    } else {
    //        console.log("Server-side error occured.");
    //    }
    //});
    //} 
    CategoryDataService.prototype.loadCategories = function () {
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
    CategoryDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CategoryDataService);
    return CategoryDataService;
}());
exports.CategoryDataService = CategoryDataService;
//# sourceMappingURL=categoryDataService.js.map