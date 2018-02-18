import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Link } from '../../Models/link';


@Injectable()
export class LinkDataService {

    constructor(private httpClient: HttpClient) {

    }

    public links:Link[];

    loadLinks() {
        return this.httpClient.get("/api/links")
            .map((data: any[]) => {
                this.links = data;
                return true;
            });
    }
}
