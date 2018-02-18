import { Category } from "./catergory";

export class Link {
    constructor(
        public idLink: string,
        public category: Category,
        public bestBefore: Date,
        public urlString: string,
        public urlStringAbbreviated: string,
        public description: string,
        public dateCreated: Date,
        public dateLastEdited: Date
    ) { }
}
