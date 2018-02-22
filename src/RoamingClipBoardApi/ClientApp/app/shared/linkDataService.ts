import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Link } from '../../Models/link';

import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class LinkDataService {

    constructor(private httpClient: HttpClient) {
    }

    // typical Angular way to get data from a WebApi
    loadLinks() {
        return this.httpClient.get<Link[]>("/api/links")
            .pipe(
                catchError(this.handleError)
            );
    }

    // error handler for catchError (see above)
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

    // the more .NET style async way - but equally OK!
    async loadLinksAsync(): Promise<Link[]> {
        try {
            console.log("BEFORE getting categories.");
            var t = await this.httpClient.get<Link[]>("/api/links").toPromise()
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

    // adding a new link:
    async postLink(link: Link): Promise<string> {
        try {
            console.log("BEFORE putting link:", link.urlString);
            var newGuid = await this.httpClient.post<string>("/api/links",
                link, httpOptions).toPromise();
            console.log("No error occured putting link. GUID ID is:", newGuid)
            return newGuid;
        } catch (e) {
            if (e instanceof HttpErrorResponse) {
                var err: Error = e;
                console.log("Error putting link: ", err.message);
            }
        }
    }
}
