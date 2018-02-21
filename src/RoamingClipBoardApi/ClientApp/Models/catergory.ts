import { Link } from "./link";

export class Category {
    // If desired, you can make some of these optional by adding "?" such as links?: Link[]
    // But note that the optional properties must be at the end.
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
