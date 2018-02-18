import { Link } from "./link";

export class Category {
    constructor(
        public idCategory: string,
        public categoryName: string,
        public links: Link[],
        public categoryDescription: string,
        public dateLastAssignedTo: Date,
        public dateCreated: Date,
        public dateLastEdited: Date
    ) { }

}
