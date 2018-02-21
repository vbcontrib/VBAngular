import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../../Models/catergory';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, tap } from 'rxjs/operators';

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

    loadCategories() {
        return this.httpClient.get<Category[]>("/api/categories")
            .pipe(
                tap(c => console.log(JSON.stringify(c))),
                catchError(this.handleError)
            );
    } 

    async loadCategoriesAsync(): Promise<Category[]> {
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

    // Added an example save using Observables.
    saveCategory(category: Category): Observable<Category> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.httpClient.post<Category>('/api/categories', category,  { headers: headers} )
        .pipe(
            tap(data => console.log('createCategory: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
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

    private handleError(err: HttpErrorResponse) {
        console.log(err);
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage: string;
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
        }
        console.error(errorMessage);
        return new ErrorObservable(errorMessage);
    }

}
