import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, throwError } from 'rxjs';
import { ApiService } from "./api-service";

import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";

@Injectable()

export class HttpService {
    private baseURL = 'http://localhost:5000/api';

    constructor(private httpClient: HttpClient) {

    }

    get(url: string, paramData?: any): Observable<any> {
        const data = { params: paramData };

        console.log(data);
        return this.httpClient.get(this.baseURL + url, data)
    }

    post(url: string, body: any): Observable<any> {
        return this.httpClient.post(this.baseURL + url, body)

    }



}