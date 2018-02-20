import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../../Models/catergory';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class CategoryDataService {

    constructor(private httpClient: HttpClient) {
    }

    public headers: HttpHeaders;

    private handleError(error: HttpErrorResponse) {

        return new ErrorObservable("");
    }

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

    async loadCategories(): Promise<Category[]> {
        try {
            console.log("BEFORE getting categories.");
            var t = await this.httpClient.get<Category[]>("/api/categories").toPromise()
            console.log("No error occured getting categories.");
            return t;

        } catch (e) {
            if (e instanceof HttpErrorResponse) {
                var err: Error = e;
                console.log("Error getting categories: ", err.message);
            }
            return null;
        }
    }

    async postCategory(category: Category): Promise<string> {
        try {
            console.log("BEFORE putting category:", category.categoryName);
            var newGuid = await this.httpClient.post<string>("/api/categories",
                category, httpOptions).toPromise();
            console.log("No error occured putting category. GUID ID is:", newGuid)
            return newGuid;
        } catch (e) {
            if (e instanceof HttpErrorResponse) {
                var err: Error = e;
                console.log("Error putting category: ", err.message);
            }
        }
    }

    //TODO: This has to go in a dedicated DataService.
    async createDemoData(): Promise<string> {
        try {
            console.log("BEFORE creating demo data.");
            var result = await this.httpClient.get<string>("/api/sampledata").toPromise();
            console.log("No error requesting to generate demodata.", result)
            return result;
        } catch (e) {
            if (e instanceof HttpErrorResponse) {
                var err: Error = e;
                console.log("Error requesting to generate demodata.", err.message);
            }
        }
    }

}
