import { Link } from "./link";

export class Category {
    constructor(
        public idCategory: string,
        public categoryName: string,
        public categoryDescription: string,
        public links: Link[],
        public dateLastAssignedTo: Date,
        public dateCreated: Date,
        public dateLastEdited: Date
    ) { }

}
