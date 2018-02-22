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
//# sourceMappingURL=catergory.js.map