import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DataService {

    constructor(private httpClient: HttpClient) {

    }

    public categories = [];
    public links = [];

    loadCategories() {
        return this.httpClient.get("/api/categoriesinfo")
            .map((data: any[]) => {
                this.categories = data;
                return true;
            });
    }

    loadLinks() {
        return this.httpClient.get("/api/linksinfo")
            .map((data: any[]) => {
                this.links = data;
                return true;
            });
    }
}
