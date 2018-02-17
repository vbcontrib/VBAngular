import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class LinkDataService {

    constructor(private httpClient: HttpClient) {

    }

    public links = [];

    loadLinks() {
        return this.httpClient.get("/api/linksinfo")
            .map((data: any[]) => {
                this.links = data;
                return true;
            });
    }
}
