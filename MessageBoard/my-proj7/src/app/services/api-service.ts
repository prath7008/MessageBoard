import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpService } from "./http-service";

import { map } from "rxjs/operators";

@Injectable()
export class ApiService {

    constructor(private httpService: HttpService) {

    }


    doSend(data: any) {
        console.log(data);
        return this.httpService.post('/send/stt', data)
    }
    getAllPost() {
        return this.httpService.get('/send/gett');
    }





}

