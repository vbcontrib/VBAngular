import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../../Models/catergory';


@Injectable()
export class CategoryDataService {

    constructor(private httpClient: HttpClient) {
    }

    public categories: Category[];
    private headers: HttpHeaders;

    async loadCategories() {
        return await this.httpClient.get("/api/categories")
            .subscribe((data: any[]) => {
                this.categories = data;
            },
            (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    console.log("Client-side error occured.");
                } else {
                    console.log("Server-side error occured.");
                }
            });
    } 

    //putCategory(category: Category) {
    //    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //    this.httpClient.put("/api/category", category, this.headers).subscribe();
    // }

}
